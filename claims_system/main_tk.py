import tkinter as tk
from tkinter import ttk, messagebox
import ttkbootstrap as ttk
from ttkbootstrap.constants import *
from db.connection import DatabaseConnection
from models.claim import Claim, ClaimNote
from datetime import datetime
import threading
import time
from sqlalchemy import func

class NewClaimDialog(tk.Toplevel):
    def __init__(self, parent, callback):
        super().__init__(parent)
        self.callback = callback
        self.title("New Claim")
        self.geometry("500x600")
        
        style = ttk.Style()
        self.configure(bg=style.colors.get("light"))
        
        # Create form
        form = ttk.Frame(self)
        form.pack(padx=20, pady=20, fill=tk.BOTH, expand=True)
        
        # Form fields
        fields = [
            ("Insurance Company", "insurance_company", ttk.Entry),
            ("Policy Number", "policy_number", ttk.Entry),
            ("Date of Loss", "date_of_loss", ttk.DateEntry),
            ("Claimant Name", "claimant_name", ttk.Entry),
            ("Incident Location", "incident_location", ttk.Entry),
            ("Description", "description", lambda p: ttk.Text(p, height=5))
        ]
        
        self.widgets = {}
        for label, key, widget_class in fields:
            frame = ttk.Frame(form)
            frame.pack(fill=tk.X, pady=5)
            
            ttk.Label(frame, text=label).pack(side=tk.LEFT)
            self.widgets[key] = widget_class(frame)
            self.widgets[key].pack(side=tk.RIGHT, fill=tk.X, expand=True)
        
        # Buttons
        btn_frame = ttk.Frame(form)
        btn_frame.pack(pady=20)
        
        ttk.Button(
            btn_frame,
            text="Save",
            style="primary.TButton",
            command=self.save_claim
        ).pack(side=tk.LEFT, padx=5)
        
        ttk.Button(
            btn_frame,
            text="Cancel",
            command=self.destroy
        ).pack(side=tk.LEFT, padx=5)
    
    def save_claim(self):
        try:
            with DatabaseConnection().get_session() as session:
                claim = Claim(
                    insurance_company=self.widgets["insurance_company"].get(),
                    policy_number=self.widgets["policy_number"].get(),
                    date_of_loss=datetime.strptime(self.widgets["date_of_loss"].get(), "%m/%d/%y"),
                    incident_location=self.widgets["incident_location"].get(),
                    incident_description=self.widgets["description"].get("1.0", tk.END).strip(),
                    status="New"
                )
                session.add(claim)
                session.commit()
            
            self.callback()  # Refresh claims list
            self.destroy()
            messagebox.showinfo("Success", "Claim created successfully!")
        except Exception as e:
            messagebox.showerror("Error", f"Failed to create claim: {str(e)}")

class ClaimsApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Safe Haul Claims Management")
        self.root.geometry("1200x800")
        self.db = DatabaseConnection()
        
        # Initialize database
        self.db.initialize_database()
        
        # Start sync service
        self.start_sync_service()
        
        # Create main container
        self.main_container = ttk.Frame(root)
        self.main_container.pack(fill=tk.BOTH, expand=True)
        
        # Create sidebar
        self.sidebar = ttk.Frame(self.main_container, width=200, style='secondary.TFrame')
        self.sidebar.pack(side=tk.LEFT, fill=tk.Y)
        
        # Create logo label
        logo_label = ttk.Label(
            self.sidebar,
            text="Safe Haul Claims",
            font=("Segoe UI", 16, "bold"),
            style='inverse'
        )
        logo_label.pack(pady=20, padx=10)
        
        # Create navigation buttons
        nav_buttons = [
            ("Dashboard", self.show_dashboard),
            ("Claims", self.show_claims),
            ("Documents", self.show_documents),
            ("Contacts", self.show_contacts),
            ("Reports", self.show_reports),
            ("Settings", self.show_settings)
        ]
        
        for text, command in nav_buttons:
            btn = ttk.Button(
                self.sidebar,
                text=text,
                command=command,
                style='secondary.TButton',
                width=20
            )
            btn.pack(pady=5, padx=10)
        
        # Create sync status indicator
        self.sync_label = ttk.Label(
            self.sidebar,
            text="✓ Synced",
            style='success.TLabel'
        )
        self.sync_label.pack(side=tk.BOTTOM, pady=10)
        
        # Create main content area
        self.content = ttk.Frame(self.main_container, style='light.TFrame')
        self.content.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        
        # Show dashboard by default
        self.show_dashboard()
    
    def start_sync_service(self):
        """Start the background sync service."""
        def sync_loop():
            while True:
                try:
                    self.sync_label.config(text="⟳ Syncing...")
                    self.db.force_sync()
                    self.sync_label.config(text="✓ Synced")
                except Exception as e:
                    self.sync_label.config(text="⚠ Sync Error")
                time.sleep(30)  # Sync every 30 seconds
        
        sync_thread = threading.Thread(target=sync_loop, daemon=True)
        sync_thread.start()
    
    def clear_content(self):
        for widget in self.content.winfo_children():
            widget.destroy()
    
    def show_dashboard(self):
        self.clear_content()
        dashboard = ttk.Frame(self.content)
        dashboard.pack(fill=tk.BOTH, expand=True, padx=20, pady=20)
        
        # Stats cards
        stats_frame = ttk.Frame(dashboard)
        stats_frame.pack(fill=tk.X, pady=10)
        
        with self.db.get_session() as session:
            active_claims = session.query(Claim).filter(
                Claim.status.in_(["New", "In Progress"])
            ).count()
            
            total_reserves = session.query(Claim).with_entities(
                func.sum(Claim.reserve_amount)
            ).scalar() or 0
            
            stats = [
                ("Active Claims", str(active_claims), "info"),
                ("Total Reserves", f"${total_reserves:,.2f}", "success"),
                ("Pending Tasks", "5", "warning"),
                ("Overdue Tasks", "2", "danger")
            ]
        
        for title, value, style in stats:
            card = ttk.LabelFrame(
                stats_frame,
                text=title,
                style=f'{style}.TLabelframe'
            )
            card.pack(side=tk.LEFT, padx=10, pady=5, ipadx=20, ipady=10)
            
            ttk.Label(
                card,
                text=value,
                font=("Segoe UI", 24, "bold"),
                style=f'{style}.TLabel'
            ).pack()
    
    def show_claims(self):
        self.clear_content()
        claims = ttk.Frame(self.content)
        claims.pack(fill=tk.BOTH, expand=True, padx=20, pady=20)
        
        # Search and filter bar
        search_frame = ttk.Frame(claims)
        search_frame.pack(fill=tk.X, pady=10)
        
        self.search_var = tk.StringVar()
        self.search_var.trace("w", lambda *args: self.filter_claims())
        
        ttk.Entry(
            search_frame,
            width=40,
            textvariable=self.search_var,
            placeholder_text="Search claims..."
        ).pack(side=tk.LEFT, padx=5)
        
        self.status_var = tk.StringVar(value="All Status")
        self.status_var.trace("w", lambda *args: self.filter_claims())
        
        ttk.Combobox(
            search_frame,
            textvariable=self.status_var,
            values=["All Status", "New", "In Progress", "Pending", "Closed"],
            width=20
        ).pack(side=tk.LEFT, padx=5)
        
        ttk.Button(
            search_frame,
            text="New Claim",
            style='primary.TButton',
            command=lambda: NewClaimDialog(self.root, self.refresh_claims)
        ).pack(side=tk.RIGHT, padx=5)
        
        # Claims table
        columns = ("Claim #", "Date", "Status", "Claimant", "Insurance", "Reserve")
        self.tree = ttk.Treeview(claims, columns=columns, show="headings")
        
        for col in columns:
            self.tree.heading(col, text=col)
            self.tree.column(col, width=100)
        
        self.tree.pack(fill=tk.BOTH, expand=True, pady=10)
        self.tree.bind("<Double-1>", self.open_claim)
        
        # Load claims
        self.refresh_claims()
    
    def refresh_claims(self):
        """Refresh the claims list."""
        for item in self.tree.get_children():
            self.tree.delete(item)
        
        with self.db.get_session() as session:
            claims = session.query(Claim).order_by(Claim.date_created.desc()).all()
            
            for claim in claims:
                self.tree.insert("", "end", values=(
                    claim.claim_number,
                    claim.date_of_loss.strftime("%Y-%m-%d"),
                    claim.status,
                    claim.claimant.name if claim.claimant else "",
                    claim.insurance_company,
                    f"${claim.reserve_amount:,.2f}"
                ))
    
    def filter_claims(self):
        """Filter claims based on search text and status."""
        search_text = self.search_var.get().lower()
        status = self.status_var.get()
        
        for item in self.tree.get_children():
            values = self.tree.item(item)["values"]
            show = True
            
            if search_text:
                show = any(search_text in str(v).lower() for v in values)
            
            if status != "All Status":
                show = show and values[2] == status
            
            if show:
                self.tree.reattach(item, "", "end")
            else:
                self.tree.detach(item)
    
    def open_claim(self, event):
        """Open detailed view of selected claim."""
        item = self.tree.selection()[0]
        claim_number = self.tree.item(item)["values"][0]
        # TODO: Implement claim detail view
        messagebox.showinfo("Info", f"Opening claim {claim_number}")
    
    def show_documents(self):
        self.clear_content()
        ttk.Label(self.content, text="Documents - Coming Soon").pack()
    
    def show_contacts(self):
        self.clear_content()
        ttk.Label(self.content, text="Contacts - Coming Soon").pack()
    
    def show_reports(self):
        self.clear_content()
        ttk.Label(self.content, text="Reports - Coming Soon").pack()
    
    def show_settings(self):
        self.clear_content()
        ttk.Label(self.content, text="Settings - Coming Soon").pack()

def main():
    root = ttk.Window(themename="litera")
    app = ClaimsApp(root)
    root.mainloop()

if __name__ == "__main__":
    main()

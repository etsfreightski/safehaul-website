import tkinter as tk
from tkinter import ttk, messagebox
import ttkbootstrap as ttk
from datetime import datetime
from services.claim_service import ClaimService
from config.config import ConfigManager

class NewClaimDialog(tk.Toplevel):
    def __init__(self, parent, callback):
        super().__init__(parent)
        self.callback = callback
        self.title("New Claim")
        self.geometry("500x600")
        
        # Get configuration
        self.config = ConfigManager()
        
        # Create form
        form = ttk.Frame(self)
        form.pack(padx=20, pady=20, fill=tk.BOTH, expand=True)
        
        # Insurance Company dropdown
        ins_frame = ttk.Frame(form)
        ins_frame.pack(fill=tk.X, pady=5)
        ttk.Label(ins_frame, text="Insurance Company").pack(side=tk.LEFT)
        self.insurance_var = tk.StringVar()
        self.insurance_combo = ttk.Combobox(
            ins_frame,
            textvariable=self.insurance_var,
            values=self.config.insurance_companies
        )
        self.insurance_combo.pack(side=tk.RIGHT, fill=tk.X, expand=True)
        
        # Other fields
        fields = [
            ("Policy Number", "policy_number", ttk.Entry),
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
        
        # Date of Loss field
        date_frame = ttk.Frame(form)
        date_frame.pack(fill=tk.X, pady=5)
        ttk.Label(date_frame, text="Date of Loss").pack(side=tk.LEFT)
        
        self.date_var = tk.StringVar()
        date_entry = ttk.Entry(
            date_frame,
            textvariable=self.date_var
        )
        date_entry.pack(side=tk.RIGHT, fill=tk.X, expand=True)
        self.date_var.set(datetime.now().strftime("%Y-%m-%d"))
        
        # Status dropdown
        status_frame = ttk.Frame(form)
        status_frame.pack(fill=tk.X, pady=5)
        ttk.Label(status_frame, text="Status").pack(side=tk.LEFT)
        self.status_var = tk.StringVar(value="New")
        self.status_combo = ttk.Combobox(
            status_frame,
            textvariable=self.status_var,
            values=self.config.claim_statuses
        )
        self.status_combo.pack(side=tk.RIGHT, fill=tk.X, expand=True)
        
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
            claim = ClaimService.create_claim(
                insurance_company=self.insurance_var.get(),
                policy_number=self.widgets["policy_number"].get(),
                date_of_loss=datetime.strptime(self.date_var.get(), "%Y-%m-%d"),
                incident_location=self.widgets["incident_location"].get(),
                incident_description=self.widgets["description"].get("1.0", tk.END).strip(),
                status=self.status_var.get()
            )
            
            self.callback()  # Refresh claims list
            self.destroy()
            messagebox.showinfo("Success", f"Claim {claim.claim_number} created successfully!")
        except ValueError as e:
            messagebox.showerror("Validation Error", str(e))
        except Exception as e:
            messagebox.showerror("Error", f"Failed to create claim: {str(e)}")

class SimpleApp:
    def __init__(self, root):
        self.root = root
        self.config = ConfigManager()
        
        # Configure window
        self.root.title("Safe Haul Claims Management")
        self.root.geometry(self.config.window_size)
        
        # Create main container
        self.main_container = ttk.Frame(root)
        self.main_container.pack(fill=tk.BOTH, expand=True)
        
        # Create sidebar
        self.sidebar = ttk.Frame(self.main_container, width=200)
        self.sidebar.pack(side=tk.LEFT, fill=tk.Y)
        
        # Create logo label
        logo_label = ttk.Label(
            self.sidebar,
            text="Safe Haul Claims",
            font=("Segoe UI", 16, "bold")
        )
        logo_label.pack(pady=20, padx=10)
        
        # Create navigation buttons with commands
        nav_buttons = [
            ("Dashboard", self.show_dashboard),
            ("Claims", self.show_claims),
            ("Documents", self.show_placeholder),
            ("Contacts", self.show_placeholder),
            ("Reports", self.show_placeholder),
            ("Settings", self.show_placeholder)
        ]
        
        for text, command in nav_buttons:
            btn = ttk.Button(
                self.sidebar,
                text=text,
                command=command,
                width=20
            )
            btn.pack(pady=5, padx=10)
        
        # Create main content area
        self.content = ttk.Frame(self.main_container)
        self.content.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        
        # Show dashboard by default
        self.show_dashboard()
    
    def clear_content(self):
        for widget in self.content.winfo_children():
            widget.destroy()
    
    def show_dashboard(self):
        self.clear_content()
        
        # Add welcome message
        ttk.Label(
            self.content,
            text="Welcome to Safe Haul Claims Management",
            font=("Segoe UI", 24)
        ).pack(pady=50)
        
        # Add stats
        stats_frame = ttk.Frame(self.content)
        stats_frame.pack(fill=tk.X, padx=20)
        
        stats = ClaimService.get_claim_stats()
        
        stat_items = [
            ("Total Claims", str(stats["total_claims"])),
            ("New Claims", str(stats["new_claims"])),
            ("In Progress", str(stats["in_progress"])),
            ("Closed", str(stats["closed"]))
        ]
        
        for title, value in stat_items:
            card = ttk.LabelFrame(stats_frame, text=title)
            card.pack(side=tk.LEFT, padx=10, pady=10, ipadx=20, ipady=10)
            ttk.Label(card, text=value, font=("Segoe UI", 24, "bold")).pack()
    
    def show_claims(self):
        self.clear_content()
        
        # Create claims view
        claims_frame = ttk.Frame(self.content)
        claims_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=20)
        
        # Search and filter bar
        filter_frame = ttk.Frame(claims_frame)
        filter_frame.pack(fill=tk.X, pady=(0, 10))
        
        # Search entry
        self.search_var = tk.StringVar()
        self.search_var.trace("w", lambda *args: self.filter_claims())
        search_entry = ttk.Entry(
            filter_frame,
            textvariable=self.search_var,
            width=40,
            placeholder_text="Search claims..."
        )
        search_entry.pack(side=tk.LEFT, padx=5)
        
        # Status filter
        self.status_var = tk.StringVar(value="All Status")
        status_combo = ttk.Combobox(
            filter_frame,
            textvariable=self.status_var,
            values=["All Status"] + self.config.claim_statuses,
            width=20
        )
        status_combo.pack(side=tk.LEFT, padx=5)
        self.status_var.trace("w", lambda *args: self.filter_claims())
        
        # New claim button
        ttk.Button(
            filter_frame,
            text="New Claim",
            style="primary.TButton",
            command=lambda: NewClaimDialog(self.root, self.refresh_claims)
        ).pack(side=tk.RIGHT)
        
        # Claims table
        columns = ("Claim #", "Date", "Status", "Insurance", "Location")
        self.tree = ttk.Treeview(claims_frame, columns=columns, show="headings")
        
        for col in columns:
            self.tree.heading(col, text=col)
            self.tree.column(col, width=150)
        
        self.tree.pack(fill=tk.BOTH, expand=True)
        
        # Load claims
        self.refresh_claims()
    
    def refresh_claims(self):
        """Refresh the claims list"""
        for item in self.tree.get_children():
            self.tree.delete(item)
        
        claims = ClaimService.get_claims(
            status=self.status_var.get() if hasattr(self, 'status_var') else None,
            search_text=self.search_var.get() if hasattr(self, 'search_var') else None
        )
        
        for claim in claims:
            self.tree.insert("", "end", values=(
                claim.claim_number,
                claim.date_of_loss.strftime("%Y-%m-%d"),
                claim.status,
                claim.insurance_company,
                claim.incident_location
            ))
    
    def filter_claims(self):
        """Filter claims based on search text and status"""
        self.refresh_claims()
    
    def show_placeholder(self):
        self.clear_content()
        ttk.Label(
            self.content,
            text="Coming Soon",
            font=("Segoe UI", 24)
        ).pack(pady=50)

def main():
    root = ttk.Window(themename=ConfigManager().theme)
    app = SimpleApp(root)
    root.mainloop()

if __name__ == "__main__":
    main()

// JavaScript for dashboard functionality
document.addEventListener('DOMContentLoaded', function () {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
    // Initialize forms
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
    
    // Handle project status changes
    const statusSelects = document.querySelectorAll('.project-status');
    statusSelects.forEach(select => {
        select.addEventListener('change', function () {
            const status = this.value;
            const card = this.closest('.card');
            const badge = card.querySelector('.status-badge');
            if (badge) {
                badge.className = 'badge status-badge';
                badge.classList.add('status-badge');
                
                switch(status) {
                    case 'completed':
                        badge.classList.add('badge-success');
                        badge.textContent = 'Completed';
                        break;
                    case 'in-progress':
                        badge.classList.add('badge-info');
                        badge.textContent = 'In Progress';
                        break;
                    case 'pending':
                        badge.classList.add('badge-warning');
                        badge.textContent = 'Pending';
                        break;
                    case 'on-hold':
                        badge.classList.add('badge-danger');
                        badge.textContent = 'On Hold';
                        break;
                }
            }
        });
    });
    
    // Handle ticket status changes
    const ticketStatusSelects = document.querySelectorAll('.ticket-status');
    ticketStatusSelects.forEach(select => {
        select.addEventListener('change', function () {
            const status = this.value;
            const card = this.closest('.card');
            const badge = card.querySelector('.status-badge');
            if (badge) {
                badge.className = 'badge status-badge';
                badge.classList.add('status-badge');
                
                switch(status) {
                    case 'resolved':
                        badge.classList.add('badge-success');
                        badge.textContent = 'Resolved';
                        break;
                    case 'in-progress':
                        badge.classList.add('badge-info');
                        badge.textContent = 'In Progress';
                        break;
                    case 'open':
                        badge.classList.add('badge-warning');
                        badge.textContent = 'Open';
                        break;
                    case 'closed':
                        badge.classList.add('badge-danger');
                        badge.textContent = 'Closed';
                        break;
                }
            }
        });
    });
    
    // Handle file uploads
    const fileInputs = document.querySelectorAll('.custom-file-input');
    fileInputs.forEach(input => {
        input.addEventListener('change', function (e) {
            const fileName = e.target.files[0]?.name || 'No file chosen';
            const label = this.closest('.input-group')?.querySelector('.custom-file-label');
            if (label) {
                label.textContent = fileName;
            }
        });
    });
    
    // Handle search filters
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase();
            const container = document.getElementById(this.dataset.container);
            if (!container) return;
            
            const items = container.querySelectorAll('[data-search]');
            items.forEach(item => {
                const text = item.dataset.search.toLowerCase();
                item.style.display = text.includes(searchTerm) ? '' : 'none';
            });
        });
    });
    
    // Handle date range pickers
    const datePickers = document.querySelectorAll('.date-range');
    datePickers.forEach(picker => {
        const startDate = picker.querySelector('.start-date');
        const endDate = picker.querySelector('.end-date');
        
        if (startDate && endDate) {
            startDate.addEventListener('change', function () {
                endDate.setAttribute('min', this.value);
            });
            
            endDate.addEventListener('change', function () {
                startDate.setAttribute('max', this.value);
            });
        }
    });
    
    // Handle dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function () {
            document.body.setAttribute('data-theme', this.checked ? 'dark' : 'light');
            localStorage.setItem('darkMode', this.checked ? 'enabled' : 'disabled');
        });
    }
     
    
    // Check for saved dark mode preference
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.setAttribute('data-theme', 'dark');
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
    }
});
 
        // Toggle sidebar for mobile
        function toggleSidebar() {
            document.getElementById('sidebar').classList.toggle('active');
        }

        // تهيئة النموذج عند الضغط على زر الحذف
        document.addEventListener('DOMContentLoaded', function() {
            // إعداد أزرار الحذف
            const deleteButtons = document.querySelectorAll('.delete-btn');
            const userNameElement = document.getElementById('deleteUserName');
            const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
            
            deleteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const userName = this.getAttribute('data-name');
                    userNameElement.textContent = userName;
                    // يمكن تخزين معرف المستخدم هنا إذا لزم الأمر
                });
            });
            
            // معالجة الحذف الفعلي
            confirmDeleteBtn.addEventListener('click', function() {
                // هنا يمكنك إضافة الكود الذي يقوم بحذف المستخدم
                // مثلاً إرسال طلب إلى الخادم
                
                // إغلاق النموذج
                const modalElement = document.getElementById('confirmDeleteModal');
                const modal = bootstrap.Modal.getInstance(modalElement);
                modal.hide();
                
                // إظهار رسالة نجاح
                const toastElement = document.getElementById('deleteSuccessToast');
                const toast = new bootstrap.Toast(toastElement);
                toast.show();
                
                // يمكنك تحديث الجدول هنا أو إعادة تحميل الصفحة بعد فترة
                setTimeout(() => {
                    // location.reload(); // لإعادة تحميل الصفحة
                }, 1000);
            });
        });
    
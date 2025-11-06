<style>
/* Light Blue Sidebar / Dark Icon Boxes / Pink Accent Color Palette */
:root {
    /* Original Dark Colors (used only for hover/scrollbar context) */
    --primary-color: #4C1D95;       /* Deep Violet (Not used for sidebar BG now) */
    --primary-dark: #37127E;        /* Darker Violet (Not used for sidebar BG now) */
    /* New Accent Color */
    --primary-light: #E75270;       /* Bright Pink - Active accent */
    --secondary-color: #E75270;     /* Bright Pink - Secondary accent */
    --accent-color: #E75270;        /* Bright Pink - Modern accent */
    /* New Sidebar Background */
    --sidebar-bg: #2d5c3fff;          
    --hover-bg-light: #C8D5E0;      /* Slightly darker blue-grey for hover */
    /* Other Colors */
    --text-primary: #1F2937;
    --text-secondary: #6B7280;
}

/* ============= SIDEBAR BACKGROUND COLOR (New Light Blue) ============= */
.sidebar {
    background: var(--sidebar-bg) !important;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1); /* Lighter shadow for light sidebar */
}

/* Sidebar menu text - dark gray color, BOLD (Good contrast on light blue) */
.sidebar-menu a span:not(.icon-wrapper):not(.submenu-dot) {
    color: #4B5563 !important; /* Dark Gray for readability */
    font-weight: bold; /* Text ni bold cheyyadam */
}

/* Icon wrapper on colored sidebar - Black background */
.icon-wrapper {
    display: inline-block;
    width: 24px;
    height: 24px;
    text-align: center;
    border-radius: 4px;
    margin-right: 10px;
    background-color: #000000 !important; /* Black box */
    transition: all 0.3s ease;
}

/* Default icon color - White */
.sidebar-menu .ti {
    color: #FFFFFF !important; /* White icons */
    vertical-align: middle;
}

/* Submenu dot styling - dark gray */
.submenu-dot {
    display: inline-block;
    width: 15px;
    color: #4B5563 !important; /* Dark Gray */
    font-weight: bold;
    margin-right: 10px;
    font-size: 18px;
    transition: all 0.3s ease;
}

/* Active dot styling - bright pink */
.submenu-dot.active-dot {
    color: var(--accent-color) !important; /* Bright Pink */
    transform: scale(1.3);
}

/* Active icon styling - bright pink background, white icon */
.icon-wrapper.active-icon {
    background-color: var(--accent-color) !important; /* Bright Pink on active */
}
.icon-wrapper.active-icon i {
    color: #FFFFFF !important; /* White icon on active */
}

/* Parent icon styling when submenu is active */
.icon-wrapper.parent-icon {
    background-color: var(--accent-color) !important; /* Bright Pink on parent open */
}
.icon-wrapper.parent-icon i {
    color: #FFFFFF !important; /* White icon on parent open */
}

/* Hover effects - lighter background on light sidebar */
.sidebar-menu a:hover {
    background: var(--hover-bg-light) !important; /* Lighter Blue hover */
    border-radius: 8px;
}

.sidebar-menu a:hover .submenu-dot:not(.active-dot) {
    color: var(--accent-color) !important; /* Bright Pink on hover */
}

/* Active text styling - bright pink color */
.sidebar-menu .active-text {
    color: var(--accent-color) !important; /* Bright Pink */
    font-weight: bold;
}

/* Hover effect for text - bright pink color */
.sidebar-menu a:hover span:not(.icon-wrapper):not(.submenu-dot):not(.active-text) {
    color: var(--accent-color) !important; /* Bright Pink on hover */
    font-weight: bold;
}

/* Active menu text styling - bright pink */
.sidebar-menu li.active > a span:not(.icon-wrapper):not(.submenu-dot),
.sidebar-menu li.active > a span.active-text {
    color: var(--accent-color) !important; /* Bright Pink */
    font-weight: bold;
}

/* Active submenu item text - bright pink */
.sidebar-menu li.active .submenu-dot.active-dot + span,
.sidebar-menu li.active.open .submenu-dot.active-dot + span {
    color: var(--accent-color) !important; /* Bright Pink */
    font-weight: bold;
}

/* Parent menu text when submenu is active - dark gray */
.sidebar-menu li.active.open > a > span:not(.icon-wrapper):not(.menu-arrow) {
    color: #4B5563 !important; /* Dark Gray */
    font-weight: bold;
}

/* Hover effect on sidebar links */
.sidebar-menu a:hover .icon-wrapper {
    background-color: var(--accent-color) !important; /* Pink icon box on hover */
}

/* Active menu item background (Light Pink Box) */
.sidebar-menu li.active > a {
    background: rgba(231, 82, 112, 0.1) !important; /* Very Light Pink/Transparent Pink */
    border-radius: 8px;
}

/* Menu arrow color */
.menu-arrow {
    color: #4B5563 !important; /* Dark Gray */
}

.sidebar-menu li.active.open > a .menu-arrow {
    color: var(--accent-color) !important; /* Pink for active */
}

/* Header Background Color */
.header {
    background: #2d5c3fff !important; /* Whitish-pinkish-blueish shade */
}

.header-left {
    background: #2d5c3fff !important; /* Whitish-pinkish-blueish shade */
    padding: 15px 20px !important; /* Space around logo */
}
.header .header-left .logo img {
    width: 225px;
    display: block;
}
.header-left .logo img {
    max-height: 50px;
    margin: 5px 0;
}

/* Scrollbar for sidebar - uses new light colors */
.sidebar::-webkit-scrollbar {
    width: 6px;
}

.sidebar::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
}

.sidebar::-webkit-scrollbar-thumb {
    background: rgba(100, 149, 237, 0.4); /* Medium Blue scrollbar */
    border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
    background: rgba(100, 149, 237, 0.6);
}
</style>

<div class="header">
    <div class="header-left active">
        <a href="{{ route('dashboard') }}" class="logo logo-normal">
            <img src="{{ asset('assets/images/logo.png') }}" alt="Logo">
            <img src="{{ asset('assets/images/white-logo.png') }}" class="white-logo" alt="Logo">
        </a>
        <a href="{{ route('dashboard') }}" class="logo-small">
            <img src="{{ asset('assets/images/logo-small.png') }}" alt="Logo">
        </a>
        <!-- <a id="toggle_btn" href="javascript:void(0);">
            <i class="ti ti-arrow-bar-to-left"></i>
        </a> -->
    </div>
    <a id="mobile_btn" class="mobile_btn" href="#sidebar">
        <span class="bar-icon">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </a>

    <div class="header-user">
        <ul class="nav user-menu">
            <li class="nav-item nav-search-inputs me-auto">
                <div class="top-nav-search">
                    
                </div>
            </li>
            <li class="nav-item nav-list">
                <ul class="nav">
                    <li>
                        <div>
                            <a href="#" class="btn btn-icon border btn-menubar btnFullscreen">
                                <i class="ti ti-maximize"></i>
                            </a>
                        </div>
                    </li>
                    <li class="dark-mode-list">
                        <a href="javascript:void(0);" id="dark-mode-toggle" class="dark-mode-toggle">
                            <i class="ti ti-sun light-mode active"></i>
                            <i class="ti ti-moon dark-mode"></i>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item dropdown has-arrow main-drop">
                <a href="javascript:void(0);" class="nav-link userset" data-bs-toggle="dropdown">
                    <span class="user-info">
                        <span class="user-letter">
                            <img src="{{ asset('assets/images/profile.jpg') }}" alt="Profile">
                        </span>
                        <span class="badge badge-success rounded-pill"></span>
                    </span>
                </a>
                <div class="dropdown-menu menu-drop-user">
                    <div class="profilename"> 
                        <a class="dropdown-item" href="{{ route('export.database') }}">
                            <i class="fa fa-download"></i> Download DB
                        </a>
                        <a class="dropdown-item" href="{{ route('logout') }}"
                           onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                            <i class="ti ti-lock"></i> Logout
                        </a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </div>
                </div>
            </li>
            </ul>
    </div>

    <div class="dropdown mobile-user-menu">
        <a href="javascript:void(0);" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fa fa-ellipsis-v"></i>
        </a>
        <div class="dropdown-menu"> 
            <a class="dropdown-item" href="{{ route('dashboard') }}">
                <i class="ti ti-user-pin"></i> My Profile
            </a>
            <a class="dropdown-item" href="{{ route('logout') }}"
               onclick="event.preventDefault(); document.getElementById('logout-form-mobile').submit();">
                <i class="ti ti-lock"></i> Logout
            </a>
            <form id="logout-form-mobile" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
        </div>
    </div>
    </div>
<div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
            <ul>
                <li class="{{ request()->routeIs('dashboard') ? 'active' : '' }}">
                    <a href="{{ route('dashboard') }}">
                        <span class="icon-wrapper {{ request()->routeIs('dashboard') ? 'active-icon' : '' }}">
                            <i class="ti ti-layout-2"></i>
                        </span>
                        <span class="{{ request()->routeIs('dashboard') ? 'active-text' : '' }}">Dashboard</span>
                    </a>
                </li>

                <li class="submenu {{ request()->is('home-banners*') || request()->is('doctors*') ? 'active open' : '' }}">
                    <a href="#">
                        <span class="icon-wrapper {{ request()->is('home-banners*') || request()->is('doctors*') ? 'parent-icon' : '' }}">
                            <i class="ti ti-home"></i>
                        </span>
                        <span>Home</span>
                        <span class="menu-arrow {{ request()->is('home-banners*') || request()->is('doctors*') ? 'active' : '' }}"></span>
                    </a>
                    <ul style="{{ request()->is('home-banners*') || request()->is('doctors*') ? 'display: block;' : '' }}">
                        <li class="{{ request()->routeIs('home-banners*') ? 'active' : '' }}">
                            <a href="{{ route('home-banners') }}">
                                <span class="submenu-dot {{ request()->routeIs('home-banners*') ? 'active-dot' : '' }}">●</span>
                                <span class="{{ request()->routeIs('home-banners*') ? 'active-text' : '' }}">Banners</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="submenu {{ request()->is('admin.appointments*') || request()->is('admin.patients*') ? 'active open' : '' }}">
                    <a href="#">
                        <span class="icon-wrapper {{ request()->is('admin.appointments*') || request()->is('admin.patients*') ? 'parent-icon' : '' }}">
                            <i class="ti ti-calendar"></i>
                        </span>
                        <span>Appointments</span>
                        <span class="menu-arrow {{ request()->is('admin.appointments*') || request()->is('admin.patients*') ? 'active' : '' }}"></span>
                    </a>
                    <ul style="{{ request()->is('admin.appointments*') || request()->is('admin.patients*') ? 'display: block;' : '' }}">
                        <li class="{{ request()->routeIs('admin.appointments.index') ? 'active' : '' }}">
                            <a href="{{ route('admin.appointments.index') }}">
                                <span class="submenu-dot {{ request()->routeIs('admin.appointments.index') ? 'active-dot' : '' }}">●</span>
                                <span class="{{ request()->routeIs('admin.appointments.index') ? 'active-text' : '' }}">All Appointments</span>
                            </a>
                        </li>
                        <li class="{{ request()->routeIs('admin.patients.index') ? 'active' : '' }}">
                            <a href="{{ route('admin.patients.index') }}">
                                <span class="submenu-dot {{ request()->routeIs('admin.patients.index') ? 'active-dot' : '' }}">●</span>
                                <span class="{{ request()->routeIs('admin.patients.index') ? 'active-text' : '' }}">Patients</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Handle click events on menu items
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if it's a non-link submenu toggle
            if(this.getAttribute('href') === '#') {
                e.preventDefault(); // Prevent default hash navigation
                const parentLi = this.closest('li');
                // Toggle 'open' class for styling parent when submenu is expanded
                parentLi.classList.toggle('open'); 

                const submenu = this.nextElementSibling;
                if(submenu && submenu.tagName === 'UL') {
                    const isOpen = submenu.style.display === 'block';
                    submenu.style.display = isOpen ? 'none' : 'block';
                }
            }
        });
    });
    
    // Initialize active states based on current route (this is often handled server-side like your template shows)
    const currentPath = window.location.pathname;
    document.querySelectorAll('.sidebar-menu a[href]').forEach(link => {
        // Simple check, real route checking depends on the framework (like request()->routeIs in Laravel)
        if(link.getAttribute('href') && link.getAttribute('href').replace(/\{\{.*?\}\}/g, '').endsWith(currentPath.split('/').pop())) {
             // Re-added the logic to ensure client-side state is correct on non-full page load scenarios
             let parent = link.closest('li').parentElement.closest('li');
             while(parent) {
                 parent.classList.add('active', 'open');
                 const submenu = parent.querySelector('ul');
                 if(submenu) submenu.style.display = 'block';
                 parent = parent.parentElement.closest('li');
             }
        }
    });
});
</script>

<style>
    .tox-tinymce {
        min-height: 200px;
    }
</style>

<script src="https://cdn.jsdelivr.net/npm/tinymce@5.10.2/tinymce.min.js"></script>
<script>
    // Initialize file upload preview
    document.addEventListener('DOMContentLoaded', function() {
        const fileInput = document.querySelector('input[name="image"]');
        const previewContainer = document.querySelector('.custom-file-container__image-preview');
        
        if(fileInput && previewContainer) {
            fileInput.addEventListener('change', function() {
                if (this.files && this.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        previewContainer.style.display = 'block';
                        // Assuming there is an <img> inside previewContainer
                        const imgElement = previewContainer.querySelector('img');
                        if (imgElement) {
                             imgElement.src = e.target.result;
                        } else {
                             // Fallback or handle if <img> tag is missing
                             previewContainer.innerHTML = '<img src="' + e.target.result + '" alt="Image Preview" style="max-width: 100%; height: auto;">';
                        }
                    }
                    reader.readAsDataURL(this.files[0]);
                }
            });
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        if(document.getElementById('content')) {
            tinymce.init({
                selector: '#content',
                height: 200,
                menubar: false,
                branding: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount textcolor'
                ],
                toolbar: 'undo redo | formatselect | bold italic underline | forecolor backcolor | ' +
                             'alignleft aligncenter alignright alignjustify | ' +
                             'bullist numlist outdent indent | link image | removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                setup: function(editor) {
                    editor.on('change', function() {
                        editor.save();
                    });
                }
            });
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        if(document.getElementById('full_description')) {
            tinymce.init({
                selector: '#full_description',
                height: 200,
                menubar: false,
                branding: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount textcolor'
                ],
                toolbar: 'undo redo | formatselect | bold italic underline | forecolor backcolor | ' +
                             'alignleft aligncenter alignright alignjustify | ' +
                             'bullist numlist outdent indent | link image | removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
                setup: function(editor) {
                    editor.on('change', function() {
                        editor.save();
                    });
                }
            }); 
        }
    });
</script> 
/* Color Palette:
    Main Background: #E8D4B7 (Warm Beige)
    Secondary Background: #FFFFFF (White)
    Text: #2C3E50 (Dark Charcoal)
    Accent: #FF0066 (Vibrant Pink)
    Secondary Accent 1: #6A0066 (Deep Purple)
    Secondary Accent 2: #934790 (Muted Purple)
*/

body {
    font-family: 'Poppins', sans-serif;
    background-color: #E8D4B7;
    color: #2C3E50;
    scroll-behavior: smooth;
    padding-top: 150px;
}

/* --- General and Reusable Styles --- */
section {
    padding: 100px 0;
    position: relative;
}

.section-title {
    color: #6A0066;
    text-align: center;
    margin-bottom: 40px;
    font-size: 2.5rem;
    font-weight: 700;
}

.card {
    background-color: #FFFFFF;
    border: 1px solid #934790;
    border-radius: 10px;
    color: #2C3E50;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.card-title {
    color: #6A0066;
    font-weight: 600;
}

.btn-warning {
    background-color: #FF0066;
    color: #FFFFFF;
    border: none;
    font-weight: 700;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

.btn-warning:hover {
    background-color: #e6005c;
}

/* --- Top Navigation Bars --- */
#social-bar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #6A0066;
    border-bottom: 1px solid #FF0066;
    z-index: 1100;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 6px 15px;
    gap: 10px;
}

#social-bar .social-icons {
    display: flex;
    gap: 15px;
    color: #E8D4B7;
    font-size: 1.3rem;
    cursor: pointer;
    user-select: none;
    position: relative;
}

#social-bar .tooltip {
    position: absolute;
    bottom: -30px;
    background: #FF0066;
    color: #FFFFFF;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    left: 50%;
    transform: translateX(-50%);
}

#social-bar .social-icons:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
}

#social-links-panel {
    position: fixed;
    top: 30px;
    right: 15px;
    background-color: #6A0066;
    border-radius: 8px;
    padding: 12px;
    display: none;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1150;
    border: 1px solid #FF0066;
}

#social-links-panel a {
    color: #FF0066;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s;
}

#social-links-panel a:hover {
    color: #FFFFFF;
    text-decoration: underline;
}

#top-button-bar {
    position: fixed;
    top: 40px;
    width: 100%;
    background-color: #6A0066;
    border-bottom: 1px solid #FF0066;
    z-index: 1050;
    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 6px 10px;
}

#top-button-bar a.btn {
    font-weight: 600;
    font-size: 0.9rem;
    padding: 6px 14px;
    border-radius: 25px;
    transition: background-color 0.3s, color 0.3s;
}

#top-button-bar a.btn.btn-outline-warning {
    color: #E8D4B7;
    border-color: #E8D4B7;
}

#top-button-bar a.btn.btn-outline-warning:hover {
    background-color: #E8D4B7;
    color: #6A0066;
    text-decoration: none;
}

.navbar {
    background-color: #6A0066;
    top: 82px;
    position: fixed;
    width: 100%;
    z-index: 1040;
    border-bottom: 1px solid #FF0066;
}

.navbar-brand {
    color: #E8D4B7 !important;
    font-weight: 700;
    font-size: 1.5rem;
}

.nav-link {
    color: #E8D4B7 !important;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #FF0066 !important;
}

/* --- Hero Section --- */
#hero {
    background: linear-gradient(135deg, #E8D4B7, #F0E8D0);
    color: #2C3E50;
}

#hero img {
    border-radius: 50%;
    border: 3px solid #6A0066;
    box-shadow: 0 6px 15px rgba(106, 0, 102, 0.4);
    transition: transform 0.5s;
}

#hero img:hover {
    transform: scale(1.05);
}

#hero h2 {
    font-size: 3rem;
    color: #6A0066;
    font-weight: 700;
    letter-spacing: 1px;
}

#hero p {
    font-size: 1.1rem;
    line-height: 1.6;
}

/* --- Hamburger Menu & Sidebar --- */
#hamburger-menu {
    position: fixed;
    top: 45px;
    left: 15px;
    z-index: 1200;
    cursor: pointer;
    width: 30px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    user-select: none;
}

#hamburger-menu span {
    display: block;
    height: 4px;
    background-color: #FF0066;
    border-radius: 2px;
    transition: all 0.3s ease;
}

#hamburger-menu.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

#hamburger-menu.active span:nth-child(2) {
    opacity: 0;
}

#hamburger-menu.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

#sidebar-menu {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100vh;
    background-color: #6A0066;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
    z-index: 1190;
    padding: 80px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: left 0.3s ease;
    border-right: 1px solid #FF0066;
}

#sidebar-menu.active {
    left: 0;
}

#sidebar-menu a {
    color: #E8D4B7;
    font-weight: 600;
    font-size: 1.1rem;
    text-decoration: none;
    padding: 10px 8px;
    border-radius: 6px;
    transition: background-color 0.3s, color 0.3s;
}

#sidebar-menu a:hover {
    background-color: #E8D4B7;
    color: #6A0066;
    text-decoration: none;
}

/* --- Languages Section Styling --- */
#languages .language-list {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
}

#languages .language-item {
    background-color: #FFFFFF;
    padding: 15px 25px;
    border-radius: 15px;
    text-align: center;
    min-width: 130px;
    box-shadow: 0 2px 6px rgba(147, 71, 144, 0.1);
    transition: transform 0.3s;
    border: 1px solid #934790;
}

#languages .language-item:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 15px rgba(147, 71, 144, 0.2);
}

#languages .language-item h5 {
    color: #6A0066;
    margin-bottom: 6px;
}

#languages .language-item p {
    font-weight: 500;
    color: #2C3E50;
}

/* --- Footer --- */
footer {
    background-color: #6A0066;
    color: #E8D4B7;
    padding: 20px 0;
    text-align: center;
    border-top: 1px solid #FF0066;
}

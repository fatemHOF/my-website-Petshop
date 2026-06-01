<template>
    <!-- <div class="w-100"> -->
 <header class="rtl">
        <div id="header-fixed-height"></div>

        <div class="tg-header__top">
            <div class="container custom-container">
                <div class="row">
                    <div class="col-xl-6 col-lg-8">
                        <ul class="tg-header__top-info left-side list-wrap">
                            <li><i class="flaticon-placeholder"></i>آدرس: تهران - میدان فاطمی</li>
                            <li><i class="flaticon-mail"></i><a href="mailto:Petspostinfo@gmail.com">Petspostinfo@gmail.com</a></li>
                        </ul>
                    </div>
                    <div class="col-xl-6 col-lg-4">
                        <ul class="tg-header__top-right list-wrap">
                            <li><i class="flaticon-phone"></i>نیاز به راهنمایی دارید؟ تماس بگیرید: <a href="tel:0123456789">+۹۸۹۱۲۱۲۳۴۵۶۷</a></li>
                            <li class="tg-header__top-social">
                                <ul class="list-wrap">
                                    <li><router-link to="/error" target="_blank"><i class="fab fa-facebook-f"></i></router-link></li>
                                    <li><router-link to="/error" target="_blank"><i class="fab fa-twitter"></i></router-link></li>
                                    <li><router-link to="/error" target="_blank"><i class="fab fa-whatsapp"></i></router-link></li>
                                    <li><router-link to="/error" target="_blank"><i class="fab fa-instagram"></i></router-link></li>
                                    <li><router-link to="/error" target="_blank"><i class="fab fa-youtube"></i></router-link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div id="sticky-header" class="tg-header__area rtl">
            <div class="container custom-container">
                <div class="row flex-row-reverse">
                    <div class="col-12">
                        <div class="tgmenu__wrap">
                            <nav class="tgmenu__nav">
                                <div class="tgmenu__action d-none d-md-block m-0 my-3">
                                    <ul class="list-unstyled d-flex flex-row-reverse ltr">

                                        <li class="header-search me-3">
                                            <div @click="toggleHeaderSearch" class="search-open-btn">
                                                <i class="flaticon-loupe"></i>
                                            </div>
                                        </li>
                                        <!-- <li class="header-cart me-3">
                                            <a href="javascript:void(0)">
                                                <i class="flaticon-shopping-bag"></i>
                                                <span>۰</span>
                                            </a>
                                        </li> -->
                                        <li class="offCanvas-menu me-3">
                                            <div @click="toggleCanvasMenu" class="menu-tigger">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16"
                                                    viewBox="0 0 26 16" fill="none">
                                                    <rect width="9" height="2" rx="1" fill="currentcolor" />
                                                    <rect x="11" width="15" height="2" rx="1" fill="currentcolor" />
                                                    <rect y="14" width="26" height="2" rx="1" fill="currentcolor" />
                                                    <rect y="7" width="16" height="2" rx="1" fill="currentcolor" />
                                                    <rect x="17" y="7" width="9" height="2" rx="1"
                                                        fill="currentcolor" />
                                                </svg>
                                            </div>
                                        </li>

                                        <li class="header-btn">
                                            <router-link to="contact" class="btn hover-effect">رزرو نوبت<i
                                                    class="flaticon-calendar-1"></i></router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex flex-row-reverse align-items-center justify-content-center">
                                  <ul class="nav navigation list-unstyled">
                                    <li
                                      v-for="(item, index) in menuItems"
                                       :key="index"
                                      :class="{ 'active': isItemActive(item) }"
                                      class="nav-item"
                                     >
                                      
                                      <router-link v-if="!item.children" :to="item.path">
                                        {{ item.name }}
                                      </router-link>
                                
                                      <a v-else href="#" @click.prevent>
                                        {{ item.name }}
                                      </a>
                                
                                      <ul v-if="item.children" class="submenu">
                                         <li 
                                          v-for="child in item.children" 
                                          :key="child.path" 
                                           :class="{ 'active': route.path === child.path }"
                                        >
                                           <router-link :to="child.path">{{ child.name }}</router-link>
                                        </li>
                                      </ul>
                                
                                   </li>
                                  </ul>
                                </div>
            
                                <div class="logo">
                                    <router-link to="/"><img :src="logo" alt="لوگو"></router-link>
                                </div>

                                <div class="mobile-nav-toggler" @click="toggleMenu">
                                    <i class="flaticon-layout"></i>
                                </div>
                            </nav>
                        </div>

                        <!-- Mobile Menu  -->
                        <div class="tgmobile__menu" :class="{ active: mobileMenuOpen }">
                            <nav class="tgmobile__menu-box">
                                <div class="close-btn" @click="toggleMenu"><i class="fas fa-times"></i></div>
                                <div class="nav-logo">
                                    <a href="index.html"><img :src="logo" alt="Logo"></a>
                                </div>
                                <div class="tgmobile__search">
                                    <form action="#">
                                        <input type="text" placeholder="جستجو...">
                                        <button><i class="fas fa-search"></i></button>
                                    </form>
                                </div>
                            <div class="tgmobile__menu-outer">
              
                                  <ul class="nav navigation list-unstyled">
                                    <li
                                      v-for="(item, index) in menuItems"
                                       :key="index"
                                      :class="{ 'active': isItemActive(item) }"
                                      class="nav-item"
                                     >
                                      
                                      <router-link v-if="!item.children" :to="item.path">
                                        {{ item.name }}
                                      </router-link>
                                
                                      <a v-else href="#" @click.prevent>
                                        {{ item.name }}
                                      </a>
                                
                                      <ul v-if="item.children" class="submenu_mobile">
                                         <li 
                                          v-for="child in item.children" 
                                          :key="child.path" 
                                           :class="{ 'active': route.path === child.path }"
                                        >
                                           <router-link :to="child.path">{{ child.name }}</router-link>
                                        </li>
                                      </ul>
                                
                                   </li>
                                  </ul>
                              </div>
                                <div class="social-links">
                                    <ul class="list-wrap">
                                        <li><a href="https://www.facebook.com/" target="_blank"><i
                                                    class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com" target="_blank"><i
                                                    class="fab fa-twitter"></i></a></li>
                                        <li><a href="https://www.whatsapp.com/" target="_blank"><i
                                                    class="fab fa-whatsapp"></i></a></li>
                                        <li><a href="https://www.instagram.com/" target="_blank"><i
                                                    class="fab fa-instagram"></i></a></li>
                                        <li><a href="https://www.youtube.com/" target="_blank"><i
                                                    class="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="tgmobile__menu-backdrop" :class="{ active: mobileMenuOpen }" @click="toggleMenu"></div>
                        <!-- End Mobile Menu -->

                    </div>
                </div>
            </div>
        </div>

        <!-- header-search -->
        <div class="search__popup" :class="{ active: headerSearch }">
            <div class="container">
                <div class="row flex-row-reverse">
                    <div class="col-12">
                        <div class="search__wrapper">
                            <div class="search__close" @click="toggleHeaderSearch">
                                <button type="button" class="search-close-btn">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                            <div class="search__form">
                                <form action="#">
                                    <div class="search__input">
                                        <input class="search-input-field" type="text" placeholder="جستجو ...">
                                        <span class="search-focus-border"></span>
                                        <button>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                                <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentcolor"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="search-popup-overlay" :class="{ active: headerSearch }" @click="toggleHeaderSearch"></div>
        <!-- header-search-end -->

        <!-- offCanvas-menu -->
        <div class="offCanvas__info" :class="{ active: offCanvasMenu }">
            <div class="offCanvas__close-icon menu-close float-left"  @click="toggleCanvasMenu">
                <button><i class="far fa-window-close"></i></button>
            </div>
            <div class="offCanvas__logo mb-30">
                <a href="index.html"><img :src="logo" alt="لوگو"></a>
            </div>
            <div class="offCanvas__side-info mb-30">
                <div class="contact-list mb-30 text-end">
                    <h4>آدرس دفتر</h4>
                    <p>تهران - میدان فاطمی</p>
                </div>
                <div class="contact-list mb-30 text-end">
                    <h4>شماره تلفن</h4>
                    <p>+۹۸۹ ۷۸۷۶ ۹۸۶۵ ۹</p>
                    <p>+۹۰ ۸۷۶۵ ۸۶۵۴۳ ۸۵</p>
                </div>
                <div class="contact-list mb-30 text-end">
                    <h4>آدرس ایمیل</h4>
                    <p>info@example.com</p>
                    <p>example.mail@hum.com</p>
                </div>
            </div>
            <div class="offCanvas__social-icon mt-30 d-flex flex-row-reverse">
                <a href="javascript:void(0)" class="me-2"><i class="fab fa-facebook-f"></i></a>
                <a href="javascript:void(0)" class="me-2"><i class="fab fa-twitter"></i></a>
                <a href="javascript:void(0)" class="me-2"><i class="fab fa-google-plus-g"></i></a>
                <a href="javascript:void(0)"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        
        <div class="offCanvas__overly" :class="{ active: offCanvasMenu }"  @click="toggleCanvasMenu"></div>
        <!-- offCanvas-menu-end -->

    </header>
    <!-- </div> -->

</template>

<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/img/logo/logo.png'
import { useRoute } from 'vue-router' // Import useRoute from vue-router

const mobileMenuOpen = ref(false);
const toggleMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value; };

const offCanvasMenu = ref(false);
const toggleCanvasMenu =()=> {offCanvasMenu.value = !offCanvasMenu.value};

const headerSearch = ref(false);
const toggleHeaderSearch =()=> {headerSearch.value = !headerSearch.value};

const route = useRoute()

const menuItems = [
  { name: 'خانه', path: '/' },
  { name: 'درباره ما', path: '/about' },
  {
    name: 'صفحات',
    path: '#', 
    children: [
      { name: 'وبلاگ ما', path: '/blog' },
      { name: 'تیم ما', path: '/team' },
      { name: 'گالری', path: '/gallery' },
      { name: 'سوالات متداول', path: '/faq' }
    ]
  },
  { name: 'تماس با ما', path: '/contact' }
]

const isItemActive = (item: any) => {
  if (item.children) {
    return item.children.some((child: any) => child.path === route.path)
  }
  return route.path === item.path
}
</script>

<style scoped>
.fullClass{
      width: 100vw;
}

.tgmobile__menu {
  position: fixed;
  top: 0;
  left: -320px;
  width: 320px;
  height: 100vh;
  background: #fff;
  z-index: 1000;
  transition: left 0.3s ease;
}

.tgmobile__menu.active {
      -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
    left: 0;
}

.tgmobile__menu-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease;
  z-index: 999;
}

.tgmobile__menu-backdrop.active {
  opacity: 1;
  visibility: visible;
}



.nav {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.nav-item {
  position: relative; /* مهم برای موقعیت‌دهی زیرمنو */
}

.nav-item a {
  text-decoration: none;
  color: #333; /* رنگ لینک‌ها */
  padding: 10px 15px;
  display: block;
}

.nav-item.active > a {
  color: var(--tg-theme-primary); /* رنگ لینک فعال */
  font-weight: bold;
}

/* --- استایل‌های مربوط به زیرمنو --- */
.submenu {
  list-style: none;
  padding: 0; /* حذف padding پیش‌فرض */
  margin: 0;
  position: absolute; /* موقعیت‌دهی مطلق */
  top: 100%; /* زیر آیتم والد قرار می‌گیرد */
  /* left: 0;  */
  background-color: white; /* پس‌زمینه زیرمنو */
  border: 1px solid #ddd; /* حاشیه */
  min-width: 150px; /* حداقل عرض */
  z-index: 1000; /* اطمینان از نمایش روی بقیه عناصر */

  /* --- پنهان کردن پیش‌فرض --- */
  display: none; 
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease; /* انیمیشن ملایم */
}

.nav-item:hover > .submenu {
  /* --- نمایش در زمان هاور --- */
  display: block; 
  opacity: 1;
  visibility: visible;
}

.submenu li {
  padding: 0; /* حذف padding لیست آیتم‌های زیرمنو */
}

.submenu a {
  padding: 10px 15px;
  color: #555; /* رنگ لینک‌های زیرمنو */
}

.submenu li.active > a {
  color: var(--tg-theme-primary); /* رنگ لینک فعال در زیرمنو */
  font-weight: normal; /* ممکن است نخواهید وزن قلم را اینجا تغییر دهید */
}

.submenu_mobile {
      list-style: none;
  padding: 0;
  margin-top: 5px; /* کمی فاصله با آیتم والد */
  margin-left: 15px; /* تورفتگی (این خط مهم است) */
  background-color: #f9f9f9; /* پس‌زمینه کمی متفاوت */
  border-radius: 4px;
  overflow: hidden; /* برای انیمیشن */
  max-height: 0; /* در ابتدا مخفی */
  transition: max-height 0.3s ease-out, padding 0.3s ease-out;
}

/* نمایش زیرمنوی باز شده */
.submenu_mobile.open {
   max-height: 300px; /* یا هر مقدار کافی */
   padding: 10px 0; /* اضافه کردن padding هنگام باز شدن */
}

.submenu_mobile li {
  padding: 0;
}

.submenu_mobile a {
  display: block;
  padding: 10px 15px; /* padding داخلی برای لینک‌های زیرمنو */
  color: #555;
  text-decoration: none;
  font-size: 14px;
}

.nav-item:hover > .submenu_mobile {
  /* --- نمایش در زمان هاور --- */
  display: block; 
  opacity: 1;
  visibility: visible;
}

.submenu_mobile li {
  padding: 0; /* حذف padding لیست آیتم‌های زیرمنو */
}

.submenu_mobile a {
  padding: 10px 15px;
  color: #555; /* رنگ لینک‌های زیرمنو */
}

.submenu_mobile li.active > a {
  color: var(--tg-theme-primary); 
  font-weight: normal; 
}


.search__popup.active {
    -webkit-transform: translateY(0%);
    -moz-transform: translateY(0%);
    -ms-transform: translateY(0%);
    -o-transform: translateY(0%);
    transform: translateY(0%);
    transition-delay: 0s;
    z-index: 99999999;
}

/* .search-popup-overlay {
    display: none; 
} */

.search-popup-overlay.active {
    opacity: 0.55;
    visibility: visible;
    transition-delay: 0s;
}

.search__popup.active .search__input {
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -ms-transform: translateY(0px);
    -o-transform: translateY(0px);
    transform: translateY(0px);
    opacity: 1;
    transition-delay: 0.3s;
}

.search__popup.active .search__input::after {
    width: 100%;
    transition-delay: 0.5s;
}
</style>
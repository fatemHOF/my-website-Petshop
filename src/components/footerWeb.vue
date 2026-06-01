<template>
      <footer>
        <div class="footer__area rtl">
            <div class="footer__top fix">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="footer__widget">
                                <div class="footer__logo">
                                    <router-link to="/"><img src="../assets/img/logo/w_logo.png" style="padding:0 40px;" alt=""></router-link>
                                </div>
                                <div class="footer__content">
                                    <p>تهران - میدان فاطمی</p>
                                    <router-link to="tel:0123456789" class="text-righ rtl">98912345678+</router-link>
                                    <router-link to="mailto:Supportinfo@gmail.com">Supportinfo@gmail.com</router-link>
                                </div>
                                <div class="footer__social">
                                    <h6 class="title">ما را دنبال کنید:</h6>
                                    <ul class="list-wrap">
                                        <li><router-link to="/error" target="_blank"><i class="fab fa-facebook-f"></i></router-link></li>
                                        <li><router-link to="/error" target="_blank"><i class="fab fa-twitter"></i></router-link></li>
                                        <li><router-link to="/error" target="_blank"><i class="fab fa-whatsapp"></i></router-link></li>
                                        <li><router-link to="/error" target="_blank"><i class="fab fa-instagram"></i></router-link></li>
                                        <li><router-link to="/error" target="_blank"><i class="fab fa-youtube"></i></router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                            <div class="footer__widget">
                                <h4 class="footer__widget-title">لینک‌های سریع</h4>
                                <div class="footer__link">
                                    <ul class="list-wrap">
                                        <li><router-link to="/">خانه</router-link></li>
                                        <li><router-link to="/team">تیم ما</router-link></li>
                                        <li><router-link to="/blog">وبلاگ ما</router-link></li>
                                        <li><router-link to="/about">درباره ما</router-link></li>
                                        <li><router-link to="/contact">تماس با ما</router-link></li>
                                        <li><router-link to="/faq">سوالات متداول </router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div class="footer__widget">
                                <h4 class="footer__widget-title">ساعات کاری</h4>
                                <div class="footer__link">
                                    <ul class="list-wrap">
                                        <li>دوشنبه <span> ۸:۰۰ - ۲۱:۰۰</span></li>
                                        <li>سه‌شنبه <span> ۸:۰۰ - ۲۱:۰۰</span></li>
                                        <li>چهارشنبه <span> ۸:۰۰ - ۲۱:۰۰</span></li>
                                        <li>پنج‌شنبه <span> ۸:۰۰ - ۲۱:۰۰</span></li>
                                        <li>جمعه <span> ۸:۰۰ - ۲۱:۰۰</span></li>
                                        <li>شنبه <span> ۸:۰۰ - ۲۱:۰۰</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6">
                            <div class="footer__widget">
                                <div class="footer__newsletter">
                                    <h2 class="title">در خبرنامه ما عضو شوید</h2>
                                    <div class="shape">
                                        <img src="../assets/img/images/footer_newsletter_shape.svg" alt="" class="injectable">
                                    </div>
                                    <form action="#">
                                        <input id="email" type="email" placeholder="ایمیل خود را وارد کنید">
                                        <button class="btn hover-effect" type="submit">عضو شوید</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer__shape-wrap">
                    <img src="../assets/img/images/footer_shape01.png" alt="img" data-aos="fade-up-right" data-aos-delay="400">
                    <img src="../assets/img/images/footer_shape02.png" alt="img" data-aos="fade-up-left" data-aos-delay="400">
                </div>
            </div>
            <div class="footer__bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="footer__bottom-menu">
                                <ul class="list-wrap">
                                    <li><router-link to="/contact">پشتیبانی</router-link></li>
                                    <li><router-link to="/contact">شرایط و ضوابط</router-link></li>
                                    <li><router-link to="/contact">سیاست حریم خصوصی</router-link></li>
                                    <li><router-link to="/contact">فرصت‌های شغلی</router-link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="copyright-text">
                                <p>کپی‌رایت © ۲۰۲۴. همه حقوق محفوظ است.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>
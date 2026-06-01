<template>
<div>
    <main class="fix rtl">

        <section class="breadcrumb__area fix">
            <div class="container">
                <div class="row align-items-end">
                    <div class="col-lg-8">
                        <div class="breadcrumb__content">
                            <h3 class="title">صفحه تماس</h3>
                            <nav class="breadcrumb">
                                <span property="itemListElement" typeof="ListItem">
                                    <router-link to="/">خانه</router-link>
                                </span>
                                <span class="breadcrumb-separator rotate-180 rotate-180"><i class="flaticon-right-arrow-angle"></i></span>
                                <span property="itemListElement" typeof="ListItem">تماس</span>
                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="breadcrumb__img">
                            <img src="../assets/img/images/breadcrumb_img.png" alt="تصویر" data-aos="fade-left" data-aos-delay="800">
                        </div>
                    </div>
                </div>
            </div>
            <div class="breadcrumb__shape-wrap">
                <img src="../assets/img/images/breadcrumb_shape01.png" alt="تصویر" data-aos="fade-down-right" data-aos-delay="400">
                <img src="../assets/img/images/breadcrumb_shape02.png" alt="تصویر" data-aos="fade-up-left" data-aos-delay="400">
            </div>
        </section>

        <section class="contact__area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="contact__content">
                            <div class="section__title mb-30">
                                <h2 class="title">ما همیشه برای شما و حیوانات خانگی شما در دسترس هستیم</h2>
                                <p>ماکناز قیسی ویوررا میتوس، و افیکیتور لیگولا. نم کواکوی کنگو سد لوکتوس لکتوس کندومنتوم.</p>
                            </div>
                            <div class="contact__info-wrap">
                                <h6 class="title">اطلاعات تماس:</h6>
                                <ul class="list-wrap">
                                    <li>
                                        <div class="icon">
                                            <i class="flaticon-phone"></i>
                                        </div>
                                        <a href="tel:0123456789">98938656565+</a>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="flaticon-placeholder"></i>
                                        </div>
                                        تهران - میدان فاطمی
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="flaticon-mail"></i>
                                        </div>
                                        <a href="mailto:info@gmail.com">info@gmail.com</a>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="fas fa-share-alt"></i>
                                        </div>
                                        <ul class="list-wrap contact__social">
                                            <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="https://www.whatsapp.com/" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                                            <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="contact__form-wrap">
                            <form action="../assets/mail.php" method="POST" id="contact-form" class="contact__form">
                                <h2 class="title">نظر خود را ارسال کنید</h2>
                                <span>آدرس ایمیل شما منتشر نخواهد شد. فیلدهای ضروری علامت‌گذاری شده‌اند *</span>
                                <div class="row gutter-20">
                                    <div class="col-md-6">
                                        <div class="form-grp">
                                            <input name="name" type="text" placeholder="نام">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-grp">
                                            <input name="email" type="email" placeholder="ایمیل">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-grp">
                                            <input name="website" type="url" placeholder="وب‌سایت">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-grp">
                                            <textarea name="message" placeholder="پیام"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn hover-effect">ارسال پیام <img src="../assets/img/icon/right_arrow.svg" alt="" class="injectable rotate-180"></button>
                            </form>
                            <p class="ajax-response mb-0"></p>
                        </div>
                    </div>
                </div>
                <div class="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=..." style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    
    </main>
</div>
</template>

<script setup lang="ts">
</script>

<style>

</style>
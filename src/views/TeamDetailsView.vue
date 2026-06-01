<template>
  <div>
<main class="fix rtl">

        <!-- breadcrumb-area -->
        <section class="breadcrumb__area fix">
            <div class="container">
                <div class="row align-items-end">
                    <div class="col-lg-8">
                        <div class="breadcrumb__content">
                            <h3 class="title">جزئیات تیم</h3>
                            <nav class="breadcrumb">
                                <span property="itemListElement" typeof="ListItem">
                                    <router-link to="/">خانه</router-link>
                                </span>
                                <span class="breadcrumb-separator rotate-180"><i class="flaticon-right-arrow-angle"></i></span>
                                <span property="itemListElement" typeof="ListItem">جزئیات تیم</span>
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
        <!-- breadcrumb-area-end -->
    
        <!-- team-details-area -->
        <section class="team__details-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5 col-md-8">
                        <div class="team__details-img">
                            <img src="../assets/img/team/team_details.jpg" alt="تصویر">
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="team__details-content">
                            <h2 class="name">داریا آندالورو</h2>
                            <span>تکنسین دامپزشکی</span>
                            <p>وقتی یک چاپگر ناشناس یک نمونه از حروف را گرفت و آن را به هم ریخت تا یک کتاب نمونه حروف بسازد. این نه تنها پنج قرن دوام آورده، بلکه وارد حروف‌چینی الکترونیکی هم شده و اساساً بدون تغییر باقی مانده است.</p>
                            <div class="experience-wrap">
                                <h4 class="title">تجربه:</h4>
                                <p>وقتی یک چاپگر ناشناس یک نمونه از حروف را گرفت و آن را به هم ریخت تا یک کتاب نمونه حروف بسازد. این نه تنها پنج قرن دوام آورده، بلکه وارد حروف‌چینی الکترونیکی هم شده و اساساً بدون تغییر باقی مانده است.</p>
                            </div>
                            <div class="contact__info-wrap team__details-info">
                                <h6 class="title">اطلاعات:</h6>
                                <ul class="list-wrap">
                                    <li>
                                        <div class="icon">
                                            <i class="flaticon-phone"></i>
                                        </div>
                                        <a href="tel:0123456789">+۱۲۳ ۸۹۸۹ ۴۴۴</a>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <i class="flaticon-placeholder"></i>
                                        </div>
                                        خیابان ۲۵۶، شهر نیویورک
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
                            <div class="contact__form-wrap team__details-form">
                                <form action="../assets/mail.php" method="POST" id="contact-form" class="contact__form">
                                    <h2 class="title">ارسال نظر</h2>
                                    <span>آدرس ایمیل شما منتشر نخواهد شد. فیلدهای ضروری با * مشخص شده‌اند</span>
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
                                    <div class="btn-flex">
                                    <button type="submit" class="btn hover-effect">ارسال پیام <img src="../assets/img/icon/right_arrow.svg" alt="" class="injectable rotate-180"></button>
                                </div>
                                </form>
                                <p class="ajax-response mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- team-details-area-end -->
    
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* .fullClass{
      width: 100vw;
} */
</style>
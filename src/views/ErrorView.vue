<template>
  <div>
<main class="fix rtl">

        <section class="breadcrumb__area fix">
            <div class="container">
                <div class="row align-items-end">
                    <div class="col-lg-8">
                        <div class="breadcrumb__content">
                            <h3 class="title">صفحه خطا</h3>
                            <nav class="breadcrumb">
                                <span property="itemListElement" typeof="ListItem">
                                    <router-link to="/">خانه</router-link>
                                </span>
                                <span class="breadcrumb-separator rotate-180"><i class="flaticon-right-arrow-angle"></i></span>
                                <span property="itemListElement" typeof="ListItem">۴۰۴</span>
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
    
        <section class="error__area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="error__img">
                            <img src="../assets/img/images/error_img.png" alt="">
                        </div>
                        <div class="error__content">
                            <h2 class="title">اوپس! چیزی پیدا نشد</h2>
                            <p>اوپس! ممکنه مشکل از شما یا ما باشه، هیچ صفحه‌ای اینجا نیست. شاید <br> منتقل شده یا حذف شده باشه. بازگشت به خانه</p>
                            <a href="index.html" class="btn hover-effect">بازگشت به صفحه اصلی <img src="../assets/img/icon/right_arrow.svg" alt="" class="injectable rotate-180"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
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
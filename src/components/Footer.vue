<template>
    <footer class="bg-light dark:bg-darkgreen text-neutral-700 dark:text-neutral-300 px-6 py-10 mt-10 relative">
        <div class=" mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
            <!-- Brand / About -->
            <div>
                <h2 class="text-xl logo-font text-main">Recipist</h2>
                <p class="pt-2 text-sm text-font-light">دنیایی از رسپی‌های خوشمزه، مخصوص شما! با Recipist از سوال تکراری
                    امشب چی درست کنم خلاص میشی!</p>
            </div>

            <!-- Links -->
            <div>
                <h3 class="font-semibold mb-2 text-font-medium text-main">لینک‌ها</h3>
                <ul class="space-y-1 text-sm text-font-light">
                    <li class="mega-menu-li"><a href="/about">درباره ما</a></li>
                    <li class="mega-menu-li"><a href="/contact">سرچ با مواد اولیه</a></li>
                    <li class="mega-menu-li"><a href="/signup">ثبت نام / ورود</a></li>
                </ul>
            </div>

            <!-- Categories -->
            <div>
                <h3 class="font-semibold mb-2 text-font-medium text-main">دسته‌بندی رسپی‌ها</h3>
                <ul class="space-y-1 text-sm text-font-light">
                    <li class="mega-menu-li"><a href="/categories/ایرانی">پیش غذا</a></li>
                    <li class="mega-menu-li"><a href="/categories/فرنگی">غذای اصلی</a></li>
                    <li class="mega-menu-li"><a href="/categories/گیاهی">دسر</a></li>
                    <li class="mega-menu-li"><a href="/categories/گیاهی">نوشیدنی</a></li>
                </ul>
            </div>

            <!-- Social / Install -->
            <div>
                <h3 class="font-semibold mb-2 text-font-medium text-main">شبکه‌های اجتماعی</h3>
                <div class="flex space-x-4 rtl:space-x-reverse gap-5 pt-5">
                    <a href="#" class="text-blue-600 hover:text-blue-800">
                        <img src="../assets/icons/facebook.svg" alt="facebook" class="w-6 h-6"> </a>
                    <a href="#" class="text-blue-600 hover:text-blue-800">
                        <img src="../assets/icons/instagram.svg" alt="instagram" class="w-6 h-6"> </a>
                    <a href="#" class="text-blue-600 hover:text-blue-800">
                        <img src="../assets/icons/telegram.svg" alt="telegram" class="w-6 h-6"> </a>
                    <a href="#" class="text-blue-600 hover:text-blue-800">
                        <img src="../assets/icons/twitter.svg" alt="twitter" class="w-6 h-6"> </a>
                </div>
            </div>

            <div>
                <img src="../assets/images/Enamad.png" alt="Enamad" class="w-30 h-30">
            </div>
        </div>



        <!-- Bottom note -->
        <div class="text-start text-sm text-gray-700 text-font-light dark:text-gray-300 pt-6">
            © 2025 Recipist. تمام حقوق محفوظ است.
        </div>

    </footer>
</template>

<script setup>
</script>

<style scoped>
/* Optional: Add direction support for RTL */
footer {
    direction: rtl;
}
</style>
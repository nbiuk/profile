<template>
    <div>
        <a href="#" @click="scrollToTop" v-show="showTopButton" id="back-to-top" class="fixed text-lg rounded-full z-10 bottom-5 right-5 size-9 text-center bg-green-600 text-white leading-9"><i class="mdi mdi-arrow-up"></i></a>
        <!-- Back to top -->
    </div>
</template>

<script>
import feather from 'feather-icons'
export default {
    data(){
        return{
            htmlTag : document.getElementsByTagName("html")[0],
            showTopButton: false
        }
    },
   
    mounted() {
        feather.replace();
    },

    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    
 methods: {
    handleScroll(){
         if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            this.showTopButton = true
        } else {
            this.showTopButton = false
        }
    },

    scrollToTop() {
        window.scrollTo(0,0);
    }
   },
    
}
</script>
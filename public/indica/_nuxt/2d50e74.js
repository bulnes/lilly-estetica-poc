(window.webpackJsonp=window.webpackJsonp||[]).push([[17,6],{250:function(e,t,n){"use strict";n.r(t);var o=n(36),component=Object(o.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"cta",on:{click:function(t){return e.$store.commit("showModal")}}},[e._v("\n    QUERO PARTICIPAR\n")])}),[],!1,null,null,null);t.default=component.exports},262:function(e,t,n){e.exports=n.p+"img/depoimento-01.07ea15b.png"},263:function(e,t,n){e.exports=n.p+"img/depoimento-02.e70fac8.png"},264:function(e,t,n){e.exports=n.p+"img/depoimento-03.fcbcfda.png"},295:function(e,t,n){"use strict";n.r(t);var o=n(122),r=n(262),l=n.n(r),c=n(263),d=n.n(c),m=n(264),v=n.n(m),w={components:{Swiper:o.Swiper,SwiperSlide:o.SwiperSlide},data:function(){return{swiperOptions:{spaceBetween:20,slidesPerView:"auto",freeMode:!0,breakpoints:{768:{allowTouchMove:!1}}},slides:3,currentSlideIndex:0,swiper:null,testimony1:l.a,testimony2:d.a,testimony3:v.a}},mounted:function(){this.swiper=this.$refs.testimonySwiper.$swiper},methods:{onChange:function(e){var t=e.realIndex;this.currentSlideIndex=t},to:function(e){this.swiper.slideTo(e,500)}}},f=n(36),component=Object(f.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"testimonies"},[n("h2",[e._v("DEPOIMENTOS")]),e._v(" "),n("p",[e._v("Quem faz parte do clube não quer sair!")]),e._v(" "),n("div",{staticClass:"testimony-swiper"},[n("swiper",{ref:"testimonySwiper",attrs:{options:e.swiperOptions},on:{slideChange:e.onChange}},[n("swiper-slide",[n("div",{staticClass:"testimony"},[n("div",{staticClass:"body"},[n("img",{attrs:{src:e.testimony1,alt:"depoimento"}}),e._v(" "),n("p",[e._v('\n                            "Super recomendo, ambiente agradável,\n                            profissionais capacitadas, tratamentos de alta\n                            tecnologia com preço acessível"\n                        ')]),e._v(" "),n("h3",[e._v("Thais Miessa")])])])]),e._v(" "),n("swiper-slide",[n("div",{staticClass:"testimony"},[n("div",{staticClass:"body"},[n("img",{attrs:{src:e.testimony2,alt:"depoimento"}}),e._v(" "),n("p",[e._v('\n                            "Atendimento maravilhoso pela equipe toda, foi\n                            atendido pela Mireia biomédica de Franca ela\n                            super atenciosa, tem um profissionalismo\n                            impecável super indico essa clínica e amei o\n                            resultado!!"\n                        ')]),e._v(" "),n("h3",[e._v("Felipe Lemos")])])])]),e._v(" "),n("swiper-slide",[n("div",{staticClass:"testimony"},[n("div",{staticClass:"body"},[n("img",{attrs:{src:e.testimony3,alt:"depoimento"}}),e._v(" "),n("p",[e._v('\n                            "Super recomendo, profissionais super educados e\n                            atenciosos, clima muito gostoso, lugar limpo e\n                            muito organizado, simplesmente adoro a clínica e\n                            todos q trabalham lá!"\n                        ')]),e._v(" "),n("h3",[e._v("Patricia Silva")])])])])],1)],1),e._v(" "),n("div",{staticClass:"swiper-pagination"},e._l(e.slides,(function(t,o){return n("div",{key:o,class:["pagination",{active:o==e.currentSlideIndex}],on:{click:function(t){return e.to(o)}}})})),0),e._v(" "),n("CTAButton")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CTAButton:n(250).default})}}]);
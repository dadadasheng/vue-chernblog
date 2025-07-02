<script setup lang="ts">
import { ref } from 'vue';
const isBrockenLogo = ref(false);
const brockenLogo = () => {
    console.log('brockenLogo');
    isBrockenLogo.value = !isBrockenLogo.value;
};
</script>
<template>
    <header>
        <div class="logo_container">
            <img @click="brockenLogo" src="../assets/img/logo_top.svg" alt="" class="logo_img" :class="{ 'logo_img_up': isBrockenLogo }">
            <img @click="brockenLogo" src="../assets/img/logo_bottom.svg" alt="" class="logo_img" :class="{ 'logo_img_down': isBrockenLogo }">
        </div>
        <div class="title">
            <h2>
                Magazine 
            </h2>
        </div>
        <div class="menu_container">
            <img class="menu_icon" src="../assets/img/menu.svg" alt="">
        </div>
    </header>
    <main>
        <div class="introduction_container">
            <div class="magazine_data_container">
                <p class="magazine_number">
                    89
                </p>
                <p class="magazine_number_title">
                    杂志数
                </p>
                <div class="line"></div>
                <p class="magazine_visitor_title">
                    访问量
                </p>
                <p class="magazine_visitor_number">
                    89
                </p>
            </div>
            <div class="magazine_introduction_text_container">
                <div class="text_container">
                    <h1>
                        数字化阅读的艺术与交互
                    </h1>
                    <p>
                        在这个数字化阅读时代，杂志类网页以其独特的排版美学和沉浸式体验重新定义了线上阅读。不同于传统网站的线性布局，这类页面完美复刻了纸质杂志的视觉韵律——错落有致的图文混排营造出翻阅实体刊物的仪式感，精心设计的留白区域让内容自由呼吸，而响应式分栏系统则确保了从桌面端到移动设备都能获得优雅的浏览体验。
                    </p>
                    <p>
                        交互设计上，这些页面堪称数字艺术的展示场：悬浮触发的动态插画会随滚动节奏渐次展开，嵌入式视频杂志采用画中画形式自动适配内容流，而智能热点系统则通过精致的悬停动效揭示隐藏的延伸阅读。特别值得注意的是那些创新性的导航设计——三维旋转的目录索引、可拖拽的专题卡片墙，或是贯穿页面的时间轴交互，都极大增强了用户的探索乐趣。
                    </p>
                    <p>
                        内容呈现方面，编辑团队巧妙运用多媒体分层技术：可展开的信息图表能逐级呈现深度数据，横向滑动的图片长廊完美展示视觉故事，而智能对比工具则允许读者并排查看不同时期的封面演变。这些动态元素与静态排版形成张弛有度的阅读节奏，配合精心调校的微交互反馈（如页面翻折效果、墨水扩散式的加载动画），共同构建出兼具杂志美学与数字活力的新型阅读空间。
                    </p>                    
                </div>
            </div>
        </div>
        <div class="magazine_list_container">
            <div class="magazine_card_container">
                <div class="magazine_card_text_container">
                    <p class="magazine_card_date">2025-02-03</p>
                    <h1 class="magazine_card_title">张国荣</h1>
                    <p class="magazine_card_content">
                        每个人都会经历这一个阶段，见到一座山，就想知道山后面是什么，我很想告诉他，过了那边，你会发现没有什么特别，回头看过来，可能会觉得这边更好。但我知道他不会听，以他的性格，自己没走过，又怎会甘心。
                    </p>
                    <div class="magazine_card_content_qoute">
                        -------《xxxxx》
                    </div>
                    <p class="magazine_card_article_data">
                        8908 9080 890
                    </p>
                </div>
                <div class="magazine_card_img_container">
                    <img src="../assets/example_img/leslie_catalog_1.png" alt="" class="magazine_card_img_item">
                    <img src="../assets/example_img/leslie_catalog_1.png" alt="" class="magazine_card_img_item">
                    <img src="../assets/example_img/leslie_catalog_1.png" alt="" class="magazine_card_img_item">
                </div>
            </div>
            <div class="magazine_card_container">
                <div class="magazine_card_text_container">
                    <p>2025-02-03</p>
                    <h1>张国荣</h1>
                    <p>
                        这个方案可以根据你的具体需求和技术栈进行调整，核心思想是通过自定义界面触发部署流程，后端自动处理文件存储和Nginx配置更新。这个方案可以根据你的具体需求和技术栈进行调整，核心思想是通过自定义界面触发部署流程，后端自动处理文件存储和Nginx配置更新。
                    </p>
                    <div>
                        -------《xxxxx》
                    </div>
                    <p>
                        8908 9080 890
                    </p>
                </div>
                <div class="magazine_card_img_container">
                    <img src="../assets/example_img/leslie_catalog_1.png" alt="" class="magazine_card_img_item">
                    <img src="../assets/example_img/leslie_catalog_1.png" alt="" class="magazine_card_img_item">
                    <img src="../assets/example_img/leslie_catalog_1.png" alt="" class="magazine_card_img_item">
                </div>
            </div>
            <div class="magazine_card_container">
                <div class="magazine_card_text_container">
                    <p>2025-02-03</p>
                    <h1>张国荣</h1>
                    <p>
                        这个方案可以根据你的具体需求和技术栈进行调整，核心思想是通过自定义界面触发部署流程，后端自动处理文件存储和Nginx配置更新。这个方案可以根据你的具体需求和技术栈进行调整，核心思想是通过自定义界面触发部署流程，后端自动处理文件存储和Nginx配置更新。
                    </p>
                    <div>
                        -------《xxxxx》
                    </div>
                    <p>
                        8908 9080 890
                    </p>
                </div>
                <div class="magazine_card_img_container">
                    <img src="../assets/example_img/leslie_catalog_1.png" alt="" class="magazine_card_img_item item_1">
                    <img src="../assets/example_img/leslie_catalog_1.png" alt="" class="magazine_card_img_item item_2">
                    <img src="../assets/example_img/leslie_catalog_1.png" alt="" class="magazine_card_img_item item_3">
                </div>
            </div>
        </div>
    </main>
    <footer>

    </footer>
</template>
<style lang="scss" scoped>
header {
    width: 100%;
    height: 10vh;
    text-align: center;
    display: flex;
    .logo_container {
        width: 10%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .logo_img {
            position: absolute;
            width: 20%;
            height: auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: all 0.3s ease-in-out;
        }
        .logo_img_up {
            transform: translate(-50%, -50%);
            transition: all 0.3s ease-in-out;
        }
        .logo_img_down {
            transform: translate(-50%, 50%);
            transition: all 0.3s ease-in-out;
        }
    }
    .title {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .menu_container {
        width: 10%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .menu_icon{
            width: 20%;
        }
    }


}
main {
    .introduction_container{
        position: relative;
        width: 100%;
        height: 80vh;
        margin: auto;
        display: flex;
        flex-direction: row;
        .magazine_data_container{
            flex: 1;
            display: flex;
            flex-direction: column;
            .magazine_number{
                font-size: 256px;
                line-height: 256px;
                color: white;
            }
            .magazine_visitor_number{
                text-align: right;
                font-size: 256px;
                line-height: 256px;
                color: white;
            }
            .magazine_number_title{
                text-align: right;
            }
            .line{
                width: 100%;
                height: 1px;
                background-color: rgb(255, 255, 255);
                margin: 10px auto;
            }
        }
        .magazine_introduction_text_container{
            flex: 1;
            padding: 10px;
            position: relative;
            .text_container{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80%;
                h1{
                    color: white;
                    font-size: 32px;
                    margin-bottom: 20px;
                }
                p{
                    color: rgb(142, 22, 22);
                    font-size: 16px;
                    line-height: 1.5;
                    margin-bottom: 20px;
                }
            }
        }
    }
    .magazine_list_container{
        position: relative;
        width: 100%;
        height: 80vh;
        margin: auto;       
        .magazine_card_container{
            width: 100%;
            height: 400px;
            background-color: black;
            display: flex;
            flex-direction: row;
            border-width: 1px;
            border-color: white;
            border-style: solid;
            padding: 20px;
             margin-bottom: 50px;
            .magazine_card_text_container{
                flex: 1;
                color: white;
                .magazine_card_title{
                    font-size: 64px;
                    margin-bottom: 20px;
                    font-weight: lighter;
                }
                .magazine_card_content{
                    font-size: 16px;
                    line-height: 1.5;
                    margin-bottom: 20px;
                    font-weight: lighter;

                }
            }
            .magazine_card_img_container{
                position: relative;
                flex: 1;
                .magazine_card_img_item{
                    position:absolute;
                    height:100%;
                    clip-path: polygon(65% 0%, 100% 0%, 75% 100%, 35% 100%);
                }
                .item_1{
                    left: 0;
                    clip-path: polygon(65% 0%, 100% 0%, 75% 100%, 35% 100%);
                }
                .item_2{
                    clip-path: polygon(65% 0%, 100% 0%, 75% 100%, 35% 100%);
                    left: 30px;
                }
                .item_3{
                    clip-path: polygon(65% 0%, 100% 0%, 75% 100%, 35% 100%);
                    left: 100px;
                }
            }
        }  
    }
}
footer {
    width: 100%;
    height: 10vh;
    text-align: center;
}
</style>
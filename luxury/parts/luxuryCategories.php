<section id="popularArticles" class="popularArticles">

    <div class="part-content">

        <!-- title - common between all devices -->
        <div class="container titleContainer">
            <div class="part-title">
                <div class="titleWrapper">
                    <h2 class="title">پرطرفدارترین دسته‌بندی لاکچری</h2>
                </div>
                <div class="imgWrap"></div>
            </div>
        </div>

        <!-- Vue rendered part -->
        <div class="container partsWrap" id="luxParts">

            <template v-if="Object.keys(luxContent).length">

                <Luxpart :opt="options" :navIcon="arrowIcon" v-for="(array, category) in luxContent"
                     :arr="array" :cat="category">
                </Luxpart>

            </template>
            <template v-else>

                <div class="aminoo" @click="updateCnt">loading ...</div>

            </template>

        </div>

    </div>

</section>
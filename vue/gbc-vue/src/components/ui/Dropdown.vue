<script lang="ts">
export default{
    name: "Dropdown",
    props: {
        linkText:{
            type: [Array, String],
            required: true,
        },
    },
    
};
</script>

<template>
    <div class="dropdown_wrapper">
        <RouterLink v-for="(link, index) in linkText" v-bind:key=index to="#" class="wrapper_item">{{ link }}</RouterLink>
    </div>
</template>

<style lang="scss" scoped>
.dropdown_wrapper {
    display: flex;
    flex-direction: column;
    border-top: solid 2px #4c4c4c;
    box-shadow: 0px 1px 2px #4c4c4c;
}

.wrapper_item {
    padding: 10px 10px;
    width: 200px;
    text-align: left;
    font-size: 15px;
    transition: color 300ms;
    color: #4c4c4c;
    &:hover{
        color: #0693e3;
        transition: color 300ms;
        cursor: pointer;
    }
}
</style>
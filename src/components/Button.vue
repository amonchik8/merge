<template>
    <button class="button"><slot /></button>
</template>

<script>
export default {
    name: 'Button',
    
}
</script>

<style lang="scss">
.button {
    @include text($H16, 600, $N0);
    cursor: pointer;
    @include flex(center, center);
    background-color: $button-disable;
    width: 100%;
    border-radius: 8px;
    padding: 16px 0;
}
</style>
<template>
    <div class="radios">
        <label class="radios-label" v-for="(item, index) in options" :key="index">
            <input type="radio" v-model="currentValue" class="radios-item" :value="item._id">
            <div class="radios-title-wrap fl">
                <span class="radios-title">{{item.name}}</span>
            </div>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array
        },
        value: String
    },
    name: 'radios',
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        value(val) {
            this.currentValue = val
        },
        currentValue(val) {
            this.$emit('input', val)
            this.$emit('change', val)
        }
    }
}
</script>

<style scoped lang="scss">
    .radios-item {
        display: none;
    }

    .radios-title-wrap {
        margin-top: 10px;
        padding: 3px 5px;
        font-size: 12px;
        width: 60px;
        text-align: center;
        color: #444;
        font-weight: 400;
        border: 1px solid #f1f1f1;
        border-radius: 4px;
        margin-right: 10px;
    }

    .radios-item:checked + .radios-title-wrap {
        color: #fff;
        background-color: #409eff;
    }
</style>

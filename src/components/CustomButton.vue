<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Submit'
    }
})

</script>


<template>
    <div id="container">
        <button class="learn-more">
            <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
            </span>
            <span class="button-text">{{ text }}</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
$bg: #fafafa;
$white: #fafafa;
$black: black;

@mixin transition($property: all, $duration: 0.45s, $ease: cubic-bezier(0.65, 0, 0.076, 1)) {
    transition: $property $duration $ease;
}

button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;

    &.learn-more {
        width: 14rem;
        height: auto;

        @media screen and (max-width: 1200px) {
            margin-top: -2px
            
        }

        .circle {
            @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
            position: relative;
            display: block;
            margin: 0;
            width: 3rem;
            height: 3rem;
            background: $black;
            border-radius: 1.625rem;

            @media screen and (max-width: 1200px) {
                width: 2.2rem;
                height: 2.2rem;
                margin-left: 40px
            
                
                
            }

            .icon {
                @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto;
                background: $white;

                &.arrow {
                    @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
                    left: 0.625rem;
                    width: 1.125rem;
                    height: 0.125rem;
                    background: none;

                    &::before {
                        position: absolute;
                        content: "";
                        top: -0.25rem;
                        right: 0.0625rem;
                        width: 0.625rem;
                        height: 0.625rem;
                        border-top: 0.125rem solid #fafafa;
                        border-right: 0.125rem solid #fafafa;
                        transform: rotate(45deg);
                    }

                    @media screen and (max-width: 1200px) {
                        left: 0.45rem;
                        width: 0.9rem;
                        height: 0.1rem;
                        background: none;

                        &::before {
                            position: absolute;
                            content: "";
                            top: -0.2rem;
                            right: 0.05rem;
                            width: 0.5rem;
                            height: 0.5rem;
                            border-top: 0.125rem solid #fafafa;
                            border-right: 0.125rem solid #fafafa;
                            transform: rotate(45deg);
                        }
                    
                        
                    }
                }
            }
        }

        .button-text {
            @include transition(all, 0.45s, cubic-bezier(0.65, 0, 0.076, 1));
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 0.75rem 0;
            margin: 0 0 0 1.85rem;
            color: $black;
            font-weight: 500;
            line-height: 1.6;
            text-align: center;

            @media screen and (max-width: 1200px) {
                margin-top: -5px;
            }
        }

    }

    &:hover {
        .circle {
            width: 100%;

            .icon {
                &.arrow {
                    background: $white;
                    transform: translate(1rem, 0);
                }
            }
        }

        .button-text {
            color: $white;
        }
    }
}

@supports (display: grid) {
    body {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 0.625rem;
        grid-template-areas: ". main main ."". main main .";
    }

    #container {
        grid-area: main;
    }
}
</style>
     
<template>
    <article class="chats">
        <template v-for="item in chats">
            <section
                v-if="item.role === 'sender'"
                class="chat-sender py-3 d-flex align-items-start justify-content-start"
            >
                <img
                    class="chat-avatar rounded"
                    :src="uriFor(['/img/chat/sender.jpg'])"
                />
                <div
                    class="chat-part overflow-hidden ms-3 flex-fill d-flex flex-column align-items-start"
                >
                    <div class="chat-name mb-2 overflow-hidden">
                        {{ item.name }}
                    </div>
                    <div
                        class="chat-content rounded bg-secondary-subtle px-3 py-2"
                        v-html="item.content"
                    ></div>
                </div>
            </section>
            <section
                v-else
                class="chat-responder py-3 flex-row-reverse d-flex align-items-start justify-content-start"
            >
                <img
                    class="chat-avatar rounded"
                    :src="uriFor(['/img/chat/responder.jpg'])"
                />
                <div
                    class="chat-part overflow-hidden me-3 flex-fill d-flex flex-column align-items-end"
                >
                    <div class="chat-name mb-2 overflow-hidden">
                        {{ item.name }}
                    </div>
                    <div
                        class="chat-content rounded bg-primary-subtle px-3 py-2"
                        v-html="item.content"
                    ></div>
                </div>
            </section>
        </template>
    </article>
</template>

<script lang="ts" setup>
import { uriFor } from './utils/uri'
import type { Chat } from '../types/tag'
const chats: Chat[] = []
</script>

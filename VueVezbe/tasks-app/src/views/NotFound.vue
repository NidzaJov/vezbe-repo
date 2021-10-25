<template>
    <div>
        404 Not Found
        <router-link
        :to="{name: 'TaskList'}"
        tag="button">
        Go to home page
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<template>
    <div class="container" style="margin-top:80px">
        <div class="card">
            <div class="card-header">Hi {{users.name}}, Welcome To Task Tracker</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeComponent',
    props : ['users']
}
</script>
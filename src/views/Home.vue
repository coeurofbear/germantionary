<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-5">
        <AddNewWord />
        <LatestAdded />
      </div>
      <div class="col-12 col-lg-6 offset-lg-1">
        <h1>Welcome to Germantionary</h1>
      </div>
    </div>
  </div>
</template>

<script>
import AddNewWord from "@/components/addnewword/AddNewWord.vue";
import LatestAdded from "@/components/latestadded/LatestAdded.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    AddNewWord,
    LatestAdded
  }
};
</script>

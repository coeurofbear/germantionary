<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-5">
        <SearchResults />
      </div>
      <div class="col-12 col-lg-6 offset-lg-1">
        <AddNewWord />
      </div>
    </div>
  </div>
</template>

<script>
import SearchResults from "@/components/searchresults/SearchResults.vue";
import AddNewWord from "@/components/addnewword/AddNewWord.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    SearchResults,
    AddNewWord
  }
};
</script>

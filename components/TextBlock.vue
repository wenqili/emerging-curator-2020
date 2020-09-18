<template>
  <div>
    <h4>Artist</h4>
    <p>{{ content.name }}</p>

    <h4>Participated Transdisciplinary Project/Residency Program</h4>
    <p>{{ content.residency }}</p>

    <h4>Accomplished artwork during the residency (Name/URL)</h4>
    <p>{{ content.works }}</p>

    <h4>Role during the program</h4>
    <p>{{ content.role }}</p>

    <h4>Responsibilities in the project</h4>
    <p>{{ content.responsibility }}</p>

    <h4>Disciplines involved in the project</h4>
    <p>{{ content.disciplines }}</p>

    <h4>Technologies used in the project</h4>
    <p>{{ content.stack }}</p>

    <h4>Means by which the artist learned about this residency</h4>
    <p>{{ content.ref }}</p>

    <h4>Selection criteria</h4>
    <p>{{ content.criteria }}</p>

    <h4>Requested materials for the application</h4>
    <p>{{ content.materials }}</p>

    <h4>Time duration</h4>
    <p>{{ content.duration }}</p>

    <h4>Support recived during the residency (in detail)</h4>
    <p>{{ content.support }}</p>

    <h4>Post-residency exhibition/private collection</h4>
    <p>{{ content.exhibitions }}</p>

    <h4>Any thoughts on how the residency succeeded/failed (emphasize on the collaboration if applicable)</h4>
    <p>{{ content.thoughs !== null ? content.thoughs : "..." }}</p>

    <h4>Your ideal institution</h4>
    <p>{{ content.ideal !== null ? content.ideal : "..." }}</p>
  </div>
</template>

<script>
export default {
  name: "TextBlock",
  props: {
    'content': {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data: function() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  line-height: 1.2rem;
}
h4{ 
  font-weight: bold;
}

p {
  margin-bottom: 1rem;
}
</style>
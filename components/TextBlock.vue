<template>
  <div v-if="type === 'artists'">
    <figure>
      <img src="~/static/diagram-10.png">
    </figure>
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
  <div v-else-if="type === 'institutions'">
    <figure>
      <img src="~/static/diagram-09.png">
    </figure>
    <h4>Location</h4>
    <p>
      {{ content.location }}
    </p>

    <h4>Institution Category</h4>
    <p>{{ content.category }}</p>

    <h4>Program of Institution</h4>
    <p>{{ content.program }}</p>
    
    <h4>Support Received from Instution</h4>
    <p>{{ content.support }}</p>
    
    <h4>Details of support (if applicable)</h4>
    <p>{{ content.detail }}</p>
    
    <h4>Resources Provided by Institution</h4>
    <p>{{ content.resource }}</p>
    
    <h4>Sources of Fund</h4>
    <p>{{ content.fund }}</p>
    
    <h4>sources of fund (details)</h4>
    <p>{{ content.funddetails }}</p>
    
    <h4>Artists</h4>
    <p>{{ content.artists }} </p>
    
    <h4>Institution’s Mission</h4>
    <p>{{ content.mission }} </p>
    
    <h4>Historical development of Institution</h4>
    <p>{{ content.history }}</p>
    
    <h4>Core program and performance </h4>
    <p>{{ content.core }}</p>
    
    <h4>work-flow of institution</h4>
    <p>{{ content.workflow }}</p>
    
    <h4>Reputation and Influence</h4>
    <p>{{ content.reputation }}</p>
    
    <h4>Reputation and Influence</h4>
    <p>{{ content.head }} </p>
    
    <h4>Disciplinary Interests</h4>
    <p>{{ content.disciplinary }}</p>
    
    <h4>Strength Analysis</h4>
    <p>{{ content.strength }}</p>
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
    },
    'type': {
      type: String,
      default: 'artists'
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
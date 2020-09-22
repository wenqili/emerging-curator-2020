<template>
  <div v-if="type === 'artists'">
    <figure>
      <img :src="artistDiagramLink">
    </figure>

    <h4>{{ $t('research.residency') }}</h4>
    <p>{{ content.residency }}</p>

    <h4>{{ $t('research.works') }}</h4>
    <p>{{ content.works }}</p>

    <h4>{{ $t('research.role') }}</h4>
    <p>{{ content.role }}</p>

    <h4>{{ $t('research.responsibility') }}</h4>
    <p>{{ content.responsibility }}</p>

    <h4>{{ $t('research.disciplines') }}</h4>
    <p>{{ content.disciplines }}</p>

    <h4>{{ $t('research.stack') }}</h4>
    <p>{{ content.stack }}</p>

    <h4>{{ $t('research.ref') }}</h4>
    <p>{{ content.ref }}</p>

    <h4>{{ $t('research.criteria') }}</h4>
    <p>{{ content.criteria }}</p>

    <h4>{{ $t('research.materials') }}</h4>
    <p>{{ content.materials }}</p>

    <h4>{{ $t('research.duration') }}</h4>
    <p>{{ content.duration }}</p>

    <h4>{{ $t('research.support') }}</h4>
    <p>{{ content.support }}</p>

    <h4>{{ $t('research.exhibitions') }}</h4>
    <p>{{ content.exhibitions }}</p>

    <h4>{{ $t('research.thoughs') }}</h4>
    <p>{{ content.thoughs !== null ? content.thoughs : "..." }}</p>

    <h4>{{ $t('research.ideal') }}</h4>
    <p>{{ content.ideal !== null ? content.ideal : "..." }}</p>
  </div>
  <div v-else-if="type === 'institutions'">
    <figure>
      <img :src="institutionDiagramLink">
    </figure>
    <h4>{{ $t('research.location') }}</h4>
    <p>
      {{ content.location }}
    </p>

    <h4>{{ $t('research.category') }}</h4>
    <p>{{ content.category }}</p>

    <h4>{{ $t('research.program') }}</h4>
    <p>{{ content.program }}</p>
    
    <h4>{{ $t('research.support') }}</h4>
    <p>{{ content.support }}</p>
    
    <h4>{{ $t('research.detail') }}</h4>
    <p>{{ content.detail }}</p>
    
    <h4>{{ $t('research.resource') }}</h4>
    <p>{{ content.resource }}</p>
    
    <h4>{{ $t('research.fund') }}</h4>
    <p>{{ content.fund }}</p>
    
    <h4>{{ $t('research.funddetails') }}</h4>
    <p>{{ content.funddetails }}</p>
    
    <h4>{{ $t('research.artists') }}</h4>
    <p>{{ content.artists }} </p>
    
    <h4>{{ $t('research.mission') }}</h4>
    <p>{{ content.mission }} </p>
    
    <h4>{{ $t('research.history') }}</h4>
    <p>{{ content.history }}</p>
    
    <h4>{{ $t('research.core') }}</h4>
    <p>{{ content.core }}</p>
    
    <h4>{{ $t('research.workflow') }}</h4>
    <p>{{ content.workflow }}</p>
    
    <h4>{{ $t('research.reputation') }}</h4>
    <p>{{ content.reputation }}</p>
    
    <h4>{{ $t('research.head') }}</h4>
    <p>{{ content.head }} </p>
    
    <h4>{{ $t('research.disciplinary') }}</h4>
    <p>{{ content.disciplinary }}</p>
    
    <h4>{{ $t('research.strength') }}</h4>
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
      artistDiagramLink: this.$store.state.localeArtistDiagram,
      institutionDiagramLink: this.$store.state.localeInstitutionDiagram
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
<!-- <template>
  <base-layout class="blog">
    <main-page-layout>
      <template #title>
        <h2>Secret Network Blog</h2>
      </template>
      <submenu>
          <template v-slot:content-center>
            <label white><input type="radio" v-model="selectedContent" value="All" checked /> All</label>
            <label green><input type="radio" v-model="selectedContent" value="Featured" /> Featured</label>
            <label secondary-purple><input type="radio" v-model="selectedContent" value="Announcement" /> Announcement</label>
            <label secondary-yellow><input type="radio" v-model="selectedContent" value="Blockchain" /> Blockchain</label>
            <label secondary-green><input type="radio" v-model="selectedContent" value="Collaboration" /> Collaboration</label>
            <label secondary-peach><input type="radio" v-model="selectedContent" value="Community" /> Community</label>
            <label secondary-turquoise><input type="radio" v-model="selectedContent" value="Cosmos" /> Cosmos</label>
            <label secondary-pink><input type="radio" v-model="selectedContent" value="Design" /> Design</label>
            <label secondary-red><input type="radio" v-model="selectedContent" value="Dev" /> Dev</label>
            <label secondary-orange><input type="radio" v-model="selectedContent" value="Ecosystem" /> Ecosystem</label>
            <label secondary-blue><input type="radio" v-model="selectedContent" value="Governance" /> Governance</label>
            <label secondary-purple><input type="radio" v-model="selectedContent" value="Introduction" /> Introduction</label>
            <label secondary-yellow><input type="radio" v-model="selectedContent" value="Nodes" /> Nodes</label>
            <label secondary-green><input type="radio" v-model="selectedContent" value="Privacy" /> Privacy</label>
            <label secondary-peach><input type="radio" v-model="selectedContent" value="Secret Apps" /> Secret Apps</label>
            <label secondary-turquoise><input type="radio" v-model="selectedContent" value="Solutions" /> Solutions</label>
            <label secondary-pink><input type="radio" v-model="selectedContent" value="Staking" /> Staking</label>
          </template>
        </submenu>
      <single-column class="container" id="categories">
        <div v-for="category in filteredCategories" :key="category.id">              
          <div class="inline">
            <h2>{{ category.name }}</h2>
            <hr>
          </div>
          {{ category.content }}
          <featured-posts :posts="$page.posts.edges"></featured-posts>
        </div>
      </single-column>
    </main-page-layout>
  </base-layout>
</template> -->

<template>
  <base-layout class="blog">
    <main-page-layout>
      <template #title>
        <h2>Secret Network Blog</h2>
      </template>
      <single-column>
        <div class="inline">
          <h2>Featured</h2>
          <hr>
        </div>
        <featured-posts :posts="$page.posts.edges"></featured-posts>
        <hr>
      </single-column>
      <single-column>
        <h2>All</h2>
        <posts :posts="$page.posts.edges"></posts>
      </single-column>
    </main-page-layout>
  </base-layout>
</template>

<script>
import BaseLayout from '../layouts/BaseLayout'
import MainPageLayout from '../layouts/MainPageLayout'
import Posts from '@/components/blog/Posts'
import PostsFeatured from '@/components/blog/PostsFeatured'

export default {
  components: { BaseLayout, MainPageLayout, Posts, PostsFeatured },
  data () {
    return {
      categories: [
        { name: 'All', content: 'All' },
        { name: 'Featured', content: 'Featured' },
        { name: 'Announcement', content: 'Announcement' },
        { name: 'Blockchain', content: 'Blockchain' },
        { name: 'Collaboration', content: 'Collaboration' },
        { name: 'Community', content: 'Community' },
        { name: 'Cosmos', content: 'Cosmos' },
        { name: 'Design', content: 'Design' },
        { name: 'Dev', content: 'Dev' },
        { name: 'Ecosystem', content: 'Ecosystem' },
        { name: 'Governance', content: 'Governance' },
        { name: 'Introduction', content: 'Introduction' },
        { name: 'Nodes', content: 'Nodes' },
        { name: 'Privacy', content: 'Privacy' },
        { name: 'Secret Apps', content: 'Secret Apps' },
        { name: 'Solutions', content: 'Solutions' },
        { name: 'Staking', content: 'Staking' }
      ],
      selectedContent: "All"
    }
  },
  computed: {
		filteredCategories: function() {
			var vm = this;
			var content = vm.selectedContent;
			
			if(content === "All") {
				return vm.categories;
			} else {
				return vm.categories.filter(function(category) {
					return category.content === content;
				});
			}
		}
	}
}
</script>

<page-query>
{
  posts: allGhostPost(sortBy: "published_at", order: DESC) {
    edges {
      node {
        title
        description: excerpt
        date: published_at (format: "D MMM YYYY")
        id
        slug
        reading_time
        primary_tag {
          name
          id
          slug
        }
        primary_author {
          name
          profile_image
        }
      }
    }
  }

  tags: allGhostTag {
    edges {
      node {
        name
        id
        ghostId
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.blog {
  h2 {
    margin: 0;
    padding: 0;
  }
  hr {
    margin: $gutter-xlarge 0;
  }
  .inline {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: rem(47px);
    align-items: center;
    h2 {
      margin: 0;
      padding: 0;
    }
    @include respond-to("medium and down") {
      display: grid;
      grid-template-columns: 100%;
      grid-column-gap: 0;
      align-items: left;
      hr {
        margin: $gutter-large 0;
      }
    }
  }
  .grid {
    margin-top: rem(55px);
  }
}
</style>

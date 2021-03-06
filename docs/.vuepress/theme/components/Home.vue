<template>
  <div
    class="column full-width no-wrap"
    style="height: 100vh; margin-top: 50px;"
  >
    <div class="column">
      <div class="flex flex-center q-pa-sm">
        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'hero'"
          style="height: 5rem"
        >
      </div>

      <div
        class="q-pa-sm text-center column items-center q-gutter-y-md"
        style="line-height: normal"
      >
        <div
          v-if="data.heroText !== null"
          class="text-weight-medium"
          style="font-size: 2.3rem"
        >
          {{ data.heroText || $title || 'Hello' }}
        </div>

        <div
          v-if="data.tagline !== null"
          class="text-weight-regular text-grey-7"
          style="max-width: 40rem"
        >
          {{ data.tagline || $description || 'Welcome to your VuePress site' }}
        </div>
      </div>
      <div class="flex flex-center q-pa-sm">
        <q-btn
          :label="actionLink.text"
          :to="actionLink.link"
          color="primary"
          size="1rem"
        />
      </div>
    </div>

    <div
      v-if="data.features && data.features.length"
      class="flex flex-center"
    >
      <div class="row justify-center">
        <div
          class="row no-wrap q-pa-sm"
          v-for="(feature, index) in data.features"
          :key="index"
          style="width: 14rem; padding-top: 20px; padding-bottom: 30px;"
        >
          <q-card
            flat
            class="column fit"
          >
            <q-card-section
              class="q-py-sm text-grey-10 text-weight-medium"
              style="font-size: 1.15rem"
            >{{ feature.title }}</q-card-section>
            <q-card-section
              class="col text-grey-8"
              style="font-size: 0.9rem"
            >{{ feature.details }}</q-card-section>
            <q-card-actions align="left">
              <q-btn
                :label="feature.actionLabel || 'Learn More'"
                :to="feature.actionLink || '#'"
                size="0.7rem"
                color="primary"
                no-caps
              />
            </q-card-actions>
          </q-card>
          <!-- <div
            class="bg-black"
            style="width: 1px; margin-top: 10px; margin-bottom: 10px;"
          /> -->
          <q-separator
            v-if="index < data.features.length-1"
            color="grey-5"
            class="custom-qs desktop-only"
            vertical
            inset
          />
        </div>
      </div>
    </div>

    <div class="col">
      <Content class="theme-default-content custom" />
    </div>

    <!-- <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
    </div> -->
    <rk-home />
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink || '/en-us/#features',
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.custom-qs {
  min-height: 50% !important;
  margin: auto !important;
}

.custom-btn {
  background-color: white !important;
  color: $primary !important;
  border: solid 2px $primary;

  &:hover {
    background-color: $primary !important;
    color: white !important;
  }
}

.action {
  margin: 1.8rem auto;
}

.action-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: $accentColor;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid darken($accentColor, 10%);

  &:hover {
    background-color: lighten($accentColor, 10%);
  }
}

.home {
  padding: $navbarHeight 2rem 0;
  max-width: $homePageWidth;
  margin: 0px auto;
  display: block;

  .hero {
    text-align: center;

    img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    h1 {
      font-size: 3rem;
    }

    h1, .description, .action {
      margin: 1.8rem auto;
    }

    .description {
      max-width: 35rem;
      font-size: 1.6rem;
      line-height: 1.3;
      color: lighten($textColor, 40%);
    }

    .action-button {
      display: inline-block;
      font-size: 1.2rem;
      color: #fff;
      background-color: $accentColor;
      padding: 0.8rem 1.6rem;
      border-radius: 4px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      border-bottom: 1px solid darken($accentColor, 10%);

      &:hover {
        background-color: lighten($accentColor, 10%);
      }
    }
  }

  .features {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
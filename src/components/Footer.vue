<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer id="footer" class="relative w-full bg-secondary">

    <div class="grid grid-cols-8 gap-4 mx-auto py-10 px-6 md:px-8">
      <ul class="flex flex-col p-2.5 gap-3 col-span-8 sm:col-span-4 md:col-span-2">
        <li>
          <h2>Menu</h2>
        </li>
        <li>
          <RouterLink to="/" data-link="Accueil" class="w-fit text-sweep after:text-red-500 after:content-[attr(data-link)]">
            Accueil
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/evenements" data-link="Événements" class="w-fit text-sweep after:text-red-500 after:content-[attr(data-link)]">
            Événements
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" data-link="Contact" class="w-fit text-sweep after:text-red-500 after:content-[attr(data-link)]">
            Contact
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/devenir-adherent" data-link="Devenir adhérent" class="w-fit text-sweep after:text-red-500 after:content-[attr(data-link)]">
            Devenir adhérent
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/mentions-legales" data-link="Mentions légales" class="w-fit text-sweep after:text-red-500 after:content-[attr(data-link)]">
            Mentions légales
          </RouterLink>
        </li>
      </ul>

      <ul class="flex flex-col p-2.5 gap-3 col-span-8 sm:col-span-4 md:col-span-2">
        <li>
          <h2>NOUS AUSSI</h2>
        </li>
        <li>
          <a href="" target="_blank" class="flex items-center">
            <img src="/img/nr.webp" alt="NR" width="40" height="40" />
            <span data-link="Normandie Racing" class="ml-2 text-sweep after:text-red-500 after:content-[attr(data-link)]">Normandie Racing</span>
          </a>
        </li>
        <li>
          <a href="https://www.viking-cup.fr" class="flex items-center">
            <img src="/img/vk-cup-square-light.webp" alt="Viking Cup" class="w-10 h-10" width="40" height="40" />
            <span data-link="Viking!Cup" class="ml-2 text-sweep after:text-red-500 after:content-[attr(data-link)]">Viking!Cup</span>
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <img src="/img/sponsors/vk-drinks.webp" alt="Viking Drinks" class="w-10 h-10" width="40" height="40" />
            <span class="ml-2">Viking!Drinks</span>
          </div>
        </li>
      </ul>

      <ul class="flex flex-col p-2.5 gap-3 col-span-8 sm:col-span-4 md:col-span-2">
        <li>
          <h2>Suivez-nous</h2>
        </li>
        <li class="flex gap-3">
          <a
            href="https://www.instagram.com/normandie.racing"
            target="_blank"
            aria-label="Instagram">
            <font-awesome-icon class="hover:text-red-500 transition-all duration-300 ease-in-out" :icon="['fab', 'square-instagram']" size="2xl" />
          </a>

          <a
            href="https://www.facebook.com/normandieracing"
            target="_blank"
            aria-label="Facebook">
            <font-awesome-icon class="hover:text-red-500 transition-all duration-300 ease-in-out" :icon="['fab', 'square-facebook']" size="2xl" />
          </a>

          <a
            href="https://www.youtube.com/@normandieracing9167"
            target="_blank"
            aria-label="Youtube">
            <font-awesome-icon class="hover:text-red-500 transition-all duration-300 ease-in-out" :icon="['fab', 'square-youtube']" size="2xl" />
          </a>

          <a
            href="https://www.tiktok.com/@normandie.racing"
            target="_blank"
            aria-label="TikTok"
            class="flex items-center">
            <div class="flex justify-center items-center rounded-md bg-white hover:bg-red-vk w-[28px] h-[29px]">
              <font-awesome-icon class="text-secondary transition-all duration-300 ease-in-out" :icon="['fab', 'tiktok']" size="lg" />
            </div>
          </a>
        </li>
      </ul>

      <ul class="flex flex-col p-2.5 gap-3 col-span-8 sm:col-span-4 md:col-span-2">
        <li>
          <h2>Contact</h2>
        </li>

        <li>
          <a href="mailto:normandieracing.drift.grip@gmail.com" class="flex items-center gap-3">
            <font-awesome-icon :icon="['fas', 'envelope']" size="lg" />
            <span data-link="normandieracing.drift.grip@gmail.com" title="normandieracing.drift.grip@gmail.com" class="text-sweep after:text-red-500 after:content-[attr(data-link)]" style="overflow-wrap: anywhere">
              normandieracing.drift.grip@gmail.com
            </span>
          </a>
        </li>

        <li>
          <a href="tel:+33619112792" class="flex items-center gap-3">
            <font-awesome-icon :icon="['fas', 'phone']" size="lg" />
            <span data-link="06 19 11 27 92" class="text-sweep after:text-red-500 after:content-[attr(data-link)]">06 19 11 27 92</span>
          </a>

          <div class="ml-8z">
            <p class="text-sm">Maxime Lemasquier</p>
            <p class="text-xs">Président de l'association</p>
          </div>
        </li>

        <li>
          <a href="tel:+33642129403" class="flex items-center gap-3">
            <font-awesome-icon :icon="['fas', 'phone']" size="lg" />
            <span data-link="06 42 12 94 03" class="text-sweep after:text-red-500 after:content-[attr(data-link)]">06 42 12 94 03</span>
          </a>

          <div class="ml-8z">
            <p class="text-sm">Thibault Blondel</p>
            <p class="text-xs">Président adjoint de l'association</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="flex border-t border-primary">
      <div class="w-11/12	md:w-10/12 mx-auto py-4 flex flex-col justify-center text-center">
        <h3>Normandie Racing</h3>
        <p class="text-xs">© {{ currentYear }} Simon Vennat • Thibault Blondel</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>

<script setup lang="ts">
import Title from '@/components/Title.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center py-32 sm:py-40 max-w-7xl m-auto px-10 gap-12 md:gap-20">
    <Title>
      <template #title>Mentions Légales</template>
    </Title>

    <div class="mt-12 md:mt-20 flex flex-col gap-14 md:gap-20">
      <!-- Section Éditeur -->
      <section>
        <h2 data-aos="fade-up" class="mb-2">1. Éditeur du site</h2>

        <div data-aos="fade-up" class="ml-3 md:ml-6 mt-3">
          <p>Le site <span class="font-bold">Normandie Racing</span>, accessible à l'adresse <a href="https://www.normandie-racing.fr" target="_blank" class="text-red-500-500 underline">www.normandie-racing.fr</a>, est édité par :</p>

          <ul class="list-disc list-inside mt-4">
            <li><strong>Nom :</strong> Normandie Racing</li>
            <li><strong>Adresse :</strong> 1 impasse du Colombier 14310 Villy-Bocage</li>
            <li><strong>Téléphone :</strong> <a href="tel:+33642129403" class="text-red-500-500 underline">06 42 12 94 03</a></li>
            <li><strong>E-mail :</strong> <a href="mailto:normandieracing.drift.grip@gmail.com" class="text-red-500-500 underline">normandieracing.drift.grip@gmail.com</a></li>
            <li><strong>Numéro d’identification :</strong> W503002525</li>
            <li><strong>Directeur de publication :</strong> Thibault Blondel</li>
          </ul>
        </div>
      </section>

      <!-- Section Hébergeur -->
      <section>
        <h2 data-aos="fade-up" class="mb-2">2. Hébergeur</h2>

        <div data-aos="fade-up" class="ml-3 md:ml-6 mt-3">
          <p>Le site est hébergé par :</p>

          <ul class="list-disc list-inside mt-4">
            <li><strong>Nom :</strong> OVH</li>
            <li><strong>Adresse :</strong> 2, rue Kellermann, 59100 Roubaix</li>
            <li><strong>Téléphone :</strong> 09 72 10 10 07</li>
            <li><strong>Site internet :</strong> <a href="https://www.ovhcloud.com" target="_blank" class="text-red-500-500 underline">https://www.ovhcloud.com</a></li>
          </ul>
        </div>
      </section>

      <!-- Section Propriété intellectuelle -->
      <section>
        <h2 data-aos="fade-up" class="mb-2">3. Propriété intellectuelle</h2>

        <div data-aos="fade-up" class="ml-3 md:ml-6 mt-3">
          <p>Tous les contenus présents sur le site Normandie Racing (textes, images, graphismes, logos, vidéos, etc.) sont protégés par les lois en vigueur sur la propriété intellectuelle.</p>

          <ul class="list-disc list-inside mt-4">
            <li><strong>Droits d'auteur :</strong> Toute reproduction, modification, distribution, ou utilisation sans autorisation écrite est interdite.</li>
          </ul>
        </div>
      </section>

      <!-- Section Données personnelles -->
      <section>
        <h2 data-aos="fade-up" class="mb-2">4. Données personnelles</h2>

        <div data-aos="fade-up" class="ml-3 md:ml-6 mt-3">
          <p>Conformément au RGPD et à la loi Informatique et Libertés, les données personnelles collectées sur le site Normandie Racing sont traitées dans le respect des règles de confidentialité.</p>

          <ul class="list-disc list-inside mt-4">
            <li><strong>Responsable du traitement :</strong> Simon Vennat</li>
            <li><strong>Finalités de traitement :</strong> Gestion des inscriptions, contact, statistiques</li>
            <li><strong>Durée de conservation :</strong> une année</li>
            <li><strong>Droits des utilisateurs :</strong> Accès, rectification, suppression, opposition, portabilité des données.</li>
            <li>
              Ces droits peuvent être exercés via <a href="mailto:normandieracing.drift.grip@gmail.com" class="text-red-500-500 underline">normandieracing.drift.grip@gmail.com</a>.
            </li>
          </ul>
        </div>
      </section>

      <!-- Section Limitation de responsabilité -->
      <section>
        <h2 data-aos="fade-up" class="mb-2">5. Limitation de responsabilité</h2>

        <div data-aos="fade-up" class="ml-3 md:ml-6 mt-3">
          <p>L’éditeur du site Normandie Racing ne peut être tenu responsable :</p>

          <ul class="list-disc list-inside mt-4">
            <li>En cas d’erreurs ou d’omissions dans les informations fournies.</li>
            <li>En cas d’indisponibilité du site pour des raisons techniques.</li>
            <li>Des dommages directs ou indirects liés à l’utilisation du site.</li>
          </ul>
        </div>
      </section>

      <!-- Section Loi applicable -->
      <section>
        <h2 data-aos="fade-up" class="mb-2">6. Loi applicable et juridiction compétente</h2>

        <div data-aos="fade-up" class="ml-3 md:ml-6 mt-3">
          <p>Les présentes mentions légales sont régies par la loi française. En cas de litige, les tribunaux compétents seront ceux du ressort de Caen.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
li {
  font-size: clamp(1rem, .8rem + .4vw, 1.2rem);
  line-height: 160%;
}
</style>

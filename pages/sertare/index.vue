<template>
  <div class="w-full flex justify-center items-center min-h-90">
    <div
      class="z-50 gap-2 flex justify-center items-center flex-wrap flex-col md:flex-row"
    >
      <NuxtLink to="sertare/sertare-gtv">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sertare GTV
        </button>
      </NuxtLink>

      <NuxtLink to="sertare/sertare-blum">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sertare blum
        </button>
      </NuxtLink>

      <NuxtLink to="/">
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sertare haffele
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

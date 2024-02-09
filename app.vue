<template>
  <div class="flex items-center justify-center min-h-screen">
    <form class="bg-white p-8 rounded shadow-md w-full max-w-md mx-4">
      <!-- Your form fields go here -->
      <div class="mb-4 text-gray-700">
        <label class="block text-sm font-bold mb-2" for="username">
          Corp parte jos
        </label>
        <input
          class="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="username"
          type="number"
          placeholder="Dimensiune fund"
        />
      </div>
      <button
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>

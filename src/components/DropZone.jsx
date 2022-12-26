import { setStore } from "./store";

export default function DropZone() {
  const uploadFile = async (e) => {
    const [image] = e.target.files;
    const fileName = image.name;
    const imagePreview = URL.createObjectURL(image);
    setStore("imagePreviewURL", imagePreview);
    setStore("fileName", fileName);
  };

  return (
    <label
      htmlFor="dropzone-file"
      class="flex flex-col w-full h-full bg-zinc-900 items-center justify-center cursor-pointer"
    >
      <h1 className="bg-gradient-to-r px-4 text-center from-indigo-400 text-transparent bg-clip-text via-purple-500 to-pink-500 text-2xl mb-8 font-semibold">
        Image binarization playground
      </h1>
      <svg
        aria-hidden="true"
        class="w-12 h-12 mb-3 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        ></path>
      </svg>
      <p class="mb-2 text-sm text-gray-400">
        <span class="font-semibold text-gray-300">Click to upload</span> or drag
        and drop
      </p>
      <p class="text-xs text-gray-400">PNG, JPG, JPEG</p>

      <input
        id="dropzone-file"
        type="file"
        class="hidden"
        onChange={uploadFile}
        accept="image/*"
      />
    </label>
  );
}

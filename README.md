# Steps

pnpm is npm ka faster version
make sure to use any one of them, not both

css:bootstrap :: daisyui:tailwind

1. Vite setup

i. `pnpm create vite@latest .`
Vanilla -> JavaScript
ii. `pnpm install`: It will install all the packages
iii. `pnpm run dev`: To start the dev server
remove the scaffold junk files

---

2. Install tailwind css (Documentation)

i. `pnpm install -d tailwindcss postcss autoprefixer`
ii. `pnpx tailwindcss init -p`: This will create 2 setting files
We changed the content part in `tailwind.config.js`
iii. Create and link `index.css` file with @tailwind directive
link `index.css` with `main.js`
and link `main.js` with `index.html`
install tailwind intellisence extension

---

3. daisyUI installation

`pnpm add -D daisyui@latest` to install it as a dev dependency
and change plugins section in `tailwind.config.js`

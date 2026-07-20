# Include utils commands
if [ -f ./.zsh/utils.zsh ]; then
  source ./.zsh/utils.zsh
else
  print "404: ./.zsh/utils.zsh not found."
fi

# Include user specific commands for more flexibility
if [ -f ./.zsh/custom.zsh ]; then
  source ./.zsh/custom.zsh
fi

alias p="pnpm"
alias pi="pnpm install"
alias px="pnpm dlx"
alias dev="pnpm dev"
alias build="pnpm build"

function cdRoot {
  cd "$(getRepoRoot)"
  return 1
}

function createStrapiPlugin {
  if [[ -z "$1" ]]; then
    echo "Error: Missing required parameter. Specify the name of the plugin" >&2
    return 1
  fi

  local destination="$(getRepoRoot)/packages/$1"
  echo $destination
  pnpm dlx @strapi/sdk-plugin@latest init $destination
}

cdStrapi() {
  cd "$(getRepoRoot)"/apps/cms
  return 1
}

cdAstro() {
  cd "$(getRepoRoot)"/apps/astro
  return 1
}

useLocal() {
  update_env_variable STRAPI_URL http://127.0.0.1:1337
}

useIp() {
  update_env_variable STRAPI_URL "http://$(ipconfig getifaddr en0):1337"
}


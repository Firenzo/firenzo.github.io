getRepoRoot() {
  local dir="$PWD"

  while [[ "$dir" != "/" ]]; do
    if [[ -f "$dir/pnpm-workspace.yaml" ]]; then
      echo "$dir"
      return 0
    fi
    dir="$(dirname "$dir")"
  done

  echo "Monorepo root not found (no pnpm-workspace.yaml)" >&2
  return 1
}

update_env_variable() {
    local env_file="./apps/astro/.env"

    local variable_name="$1"
    local new_value="$2"

    # Check if the variable exists in the file
    if grep -q "^$variable_name=" "$env_file"; then
        # Update the value of the variable
        # Check the operating system
        if [[ $(uname) == "Darwin" ]]; then
            # macOS
            sed -i "" "s|^$variable_name=.*|$variable_name=$new_value|" "$env_file"
        else
            sed -i "s|^$variable_name=.*|$variable_name=$new_value|" "$env_file"
        fi
    else
        echo "Environment variable not present in $env_file"
        return
    fi
}
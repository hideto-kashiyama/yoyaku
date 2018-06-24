# server-based syntax
# ======================
# Defines a single server with a list of roles and multiple properties.
# You can define all roles on a single server, or split them:

server "133.18.16.115", user: "deploy", roles: %w{app db web}

set :ssh_options,     {
  user: fetch(:user),
  keys: %w(~/.ssh/wes-deploy),
  forward_agent: true
}

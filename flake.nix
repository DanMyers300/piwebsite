{
  description = "PI Website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };

        bun = pkgs.bun;

        previewScript = pkgs.writeShellScriptBin "run-preview" ''
          set -e
          echo "Building site..."
          ${pkgs.lib.getExe bun} run build
        
          echo "Starting Bun preview server..."
          exec ${pkgs.lib.getExe bun} run preview -- --host
        '';
      in
      {
        devShells.default = pkgs.mkShell {
          packages = [ bun ];

          shellHook = ''
            echo "Entering Bun development environment..."
            export CC="${pkgs.lib.getExe pkgs.clang}"
            echo "Bun version: $(bun --version)"
          '';
        };

        # This enables `nix run`
        apps.default = flake-utils.lib.mkApp {
          drv = previewScript;
        };
      }
    );
}

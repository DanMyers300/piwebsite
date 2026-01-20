{
  description = "PI Website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs { inherit system; };
      # Define specific tools needed for Bun development
      bunPackages = with pkgs; [
        bun       # The Bun runtime
      ];
    in {
      devShells.default = pkgs.mkShell {
        packages = bunPackages;
        shellHook = ''
          echo "Entering Bun development environment..."
          export CC="${pkgs.lib.getExe pkgs.clang}"
          # ... other setup for environment variables
          echo "Bun version: $(bun --version)"
        '';
      };
    });
}

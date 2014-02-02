class Stdlibjs::Rails::Railtie < ::Rails::Railtie
  config.before_configuration do
    config.assets.paths << Stdlibjs.javascripts_path.to_s
  end
end

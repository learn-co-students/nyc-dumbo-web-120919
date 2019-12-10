Pry.config.prompt = proc do |obj, nest_level, _|
  if obj.inspect == "main" 
    "pry(main)> "
  else
    "pry(#{obj.class.inspect.split("::")[-1]})> "
  end
end

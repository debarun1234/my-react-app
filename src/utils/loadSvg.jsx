const loadSvg = (iconName) => {
    try {
      const svgPath = new URL(`../assets/icons/${iconName}.svg`, import.meta.url).href;
  
      if (!svgPath) {
        throw new Error(`SVG not found: ${iconName}`);
      }
  
      return (
        <img
          src={svgPath}
          alt={`${iconName} icon`}
          className="w-8 h-8"
        />
      );
    } catch (error) {
      console.error(`Error loading SVG: ${iconName}`, error);
      return null;
    }
  };
  
  export default loadSvg;
  
Always use proper type for css declaration. Otherwise you will have it blocked by the browser.
<link rel="stylesheet" type="text/css" href="styles.css">

----------------------------------------------------------------------------------------------------------------------------------

If you use modules instead of simple file declarations then you have to use this in the main html file:
<script type="module">
    import {change} from './generator.js'
    document.getElementById('button').addEventListener('click', change);
</script>
Otherwise you functions will not be accessible.

Error that you may face:
Loading module from “http://localhost:8080/generator.js” was blocked because of a disallowed MIME type (“text/html”)

Solution: Set proper path to the module (relative or absolute). You can also try to set base_path

----------------------------------------------------------------------------------------------------------------------------------

When importing modules always add .js extension to the end of the file. Otherwise importing will be blocked by the browser.
import { getPermutations } from "./permutations.js"; 

----------------------------------------------------------------------------------------------------------------------------------

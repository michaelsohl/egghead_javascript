//"use strict";

function func() {
  console.log(this === global);
}

func.call(null);
func.call(undefined);

func.apply(null);
func.apply(undefined);

/**
 * This will not happen on strict mode
 */

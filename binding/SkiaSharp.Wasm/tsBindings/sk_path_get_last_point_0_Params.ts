/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_path_get_last_point_0_Params
	{
		/* Pack=4 */
		cpath : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_path_get_last_point_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_path_get_last_point_0_Params();
			
			{
				ret.cpath = Number(memoryContext.getValue(pData + 0, "*"));
			}
			return ret;
		}
	}
}

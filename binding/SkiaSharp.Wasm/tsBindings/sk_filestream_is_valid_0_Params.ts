/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_filestream_is_valid_0_Params
	{
		/* Pack=4 */
		cstream : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_filestream_is_valid_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_filestream_is_valid_0_Params();
			
			{
				ret.cstream = Number(memoryContext.getValue(pData + 0, "*"));
			}
			return ret;
		}
	}
}

/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_dynamicmemorywstream_detach_as_data_0_Params
	{
		/* Pack=4 */
		cstream : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_dynamicmemorywstream_detach_as_data_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_dynamicmemorywstream_detach_as_data_0_Params();
			
			{
				ret.cstream = Number(memoryContext.getValue(pData + 0, "*"));
			}
			return ret;
		}
	}
}

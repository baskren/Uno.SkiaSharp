/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_textblob_ref_0_Params
	{
		/* Pack=4 */
		blob : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_textblob_ref_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_textblob_ref_0_Params();
			
			{
				ret.blob = Number(memoryContext.getValue(pData + 0, "*"));
			}
			return ret;
		}
	}
}

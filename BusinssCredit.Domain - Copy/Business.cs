namespace BusinessCredit.Domain
{
    public class Business
    {
        public int BusinessID { get; set; }
        public string PhysicalAddress { get; set; }
        public virtual AccountHolder Owner { get; set; }
    }
}
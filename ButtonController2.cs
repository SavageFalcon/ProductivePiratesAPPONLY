using UnityEngine;
using UnityEngine.SceneManagement;

public class ButtonController2 : MonoBehaviour
{
    public void OnButtonClick2()
    {
        Debug.Log("Item Shop!");
        SceneManager.LoadScene("ItemShop");
    }
}

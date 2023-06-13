from datetime import datetime
from queue import PriorityQueue

class User():
    def __init__(self, userId, name):
        self.userId = userId
        self.name = name

    def create_transaction(self):
        print(f"Hi {self.name},")
        receiver=input("enter receiver details:")
        amount=int(input("enter amount details:"))
        reward=float(input("enter reward details:"))
        trans_age=datetime.now()
        l = [self.userId, receiver, amount, reward, trans_age]
        return l;
    
class Network():
    usersList=[]
    tr=[]
    id=0;
    pq=PriorityQueue()
    size=1
    def normalizer(self):
        for i in Network.tr:
            time=datetime.now()
            org_time=time.hour*60+time.minute
            trans_time=i[-1]
            trans_time=trans_time.hour*60+trans_time.minute
            res_time=org_time-trans_time
            elem1=(i[3]/5)*100
            elem2=(res_time/10)*100
            ans=max(elem1,elem2)
            Network.pq.put((ans*-1,i))
            Network.tr=[]
            temp=Network.size
	    
        while Network.pq and temp:
	        print(Network.pq.get())
	        temp=temp-1
	    	
        while Network.pq:
            res_tuple=Network.pq.get()
            Network.tr.append([res_tuple[1]])
            print([res_tuple[1]])
        return
	    
    def createUser(self):
        Network.id=Network.id+1
        name=input("Enter name:")
        user=User(Network.id,name)
        Network.usersList.append(user)
        print(f"Your user id is {user.userId}")
	    
    def findUser(self,id):
        for user in Network.usersList:
	        if(user.userId==id):
	            return user
        return None

def main():
    network=Network()
    while(1):
        print("1. Create User")
        print("2. Do Transactions")
        print("3. Exit")
        option=int(input("Enter option:"))
        match option:
            case 1:
                network.createUser()
            case 2:
                id=int(input("Enter your identity to do transaction(id):"))
                user=network.findUser(id)
                if(user!=None):
                    transaction=user.create_transaction()
                    network.tr.append(transaction)
                else:
                    print("User not found")
            case 3:
                break
    network.normalizer()
    # print(network.tr)
main()
	    

text=input()
letter=input()
count=0
for T in text:
   if T == letter:
      count+=1
percentage = (count/len(text))*100
print(int(percentage))